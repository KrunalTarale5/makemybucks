import InputField, { InputFieldValue } from '@components/InputField';
import { useSnackbar } from '@components/Snackbar';
import { PoppinsTypography } from '@components/Typography';
import {
	HandoverQrFields,
	HandoverQrRequest,
	useGetSelectExecutiveListApi,
	useHandoverQrApi,
	validateHandoverQrForm,
} from '@hooks/admin-qrcode';
import { FormErrorMessage, Option } from '@interfaces/common';
import { LoadingButton } from '@mui/lab';
import { Button, Stack, useTheme } from '@mui/material';
import { FC, memo, useState } from 'react';

const BUTTONS = [50, 100, 200];

const intialFormData: HandoverQrRequest = {
	sub_admin_id: '',
	number: '',
};
const intialFormError: FormErrorMessage<Partial<HandoverQrRequest>> = {
	sub_admin_id: '',
};

interface HandoverQrProps {
	refetch: () => void;
}
const HandoverQr: FC<HandoverQrProps> = (props) => {
	const theme = useTheme();

	const { showSnackbar, hideSnackbar } = useSnackbar();

	const HandoverQrApi = useHandoverQrApi();
	const GetSelectExecutiveListApi = useGetSelectExecutiveListApi();

	const [formData, setFormData] = useState(intialFormData);
	const [formError, setFormError] = useState(intialFormError);

	const onChange = (fieldName: string, value: InputFieldValue) => {
		const _formData = { ...formData, [fieldName]: value };
		setFormData(_formData);
		setFormError({
			...formError,
			[fieldName]: HandoverQrFields(fieldName as keyof HandoverQrRequest, _formData),
		});
	};

	const handleClick = () => {
		const validatation = validateHandoverQrForm(formData);
		if (validatation.hasError) {
			setFormError(validatation.errors);
			return;
		}
		HandoverQrApi.mutateAsync({
			request: { ...formData, sub_admin_id: (formData.sub_admin_id as Option)?.value },
		})
			.then((response) => {
				setFormData(intialFormData);
				showSnackbar({
					title: 'Success!',
					variant: 'sucess',
					content: response.data?.message,
					onCancel: () => hideSnackbar(),
				});
				props.refetch();
			})
			.catch((error) => {
				showSnackbar({
					title: 'Error!',
					variant: 'error',
					content: error.response?.data?.message,
					onCancel: () => hideSnackbar(),
				});
			});
	};

	return (
		<Stack gap={5}>
			<InputField
				fieldName={'sub_admin_id'}
				value={formData.sub_admin_id}
				fieldProps={{
					label: 'Select Executive',
					placeholder: 'Select Executive ',
					error: Boolean(formError['sub_admin_id']),
					helperText: formError['sub_admin_id'],
					size: 'medium',
					options: GetSelectExecutiveListApi.data?.data.subadmins_list,
					sx: {
						'& .MuiOutlinedInput-notchedOutline': {
							borderColor: theme.palette.common.secondaryGreyText,
							borderRadius: `8px`,
						},
						'& .MuiInputBase-input': {
							height: 11,
						},
						'& .MuiInputBase-root': {
							width: '30%',
						},
						'& .MuiTypography-subtitle1': {
							color: theme.palette.common.secondaryGreyText,
						},
					},
				}}
				fieldType={'select'}
				onChange={onChange}
			/>
			<Stack gap={1}>
				<PoppinsTypography
					variant='subtitle1'
					sx={{ color: theme.palette.common.secondaryGreyText }}
				>
					Select Your Number
				</PoppinsTypography>

				<Stack
					flexDirection={'row'}
					gap={1}
				>
					{BUTTONS.map((l, index) => (
						<Button
							key={index}
							size='large'
							variant={formData.number === String(l) ? 'contained' : 'outlined'}
							color='primary'
							sx={{
								...(formData.number === String(l) && { borderColor: '#DFE3ED' }),
								width: 100,
								height: 40,
								borderRadius: '8px',
							}}
							onClick={() => onChange('number', String(l))}
						>
							{l}
						</Button>
					))}
				</Stack>
			</Stack>
			<LoadingButton
				size='large'
				variant='contained'
				color='primary'
				sx={{
					width: 209,
					height: 51,
					borderRadius: '8px',
				}}
				onClick={handleClick}
				disabled={formData.number === '' || formData.sub_admin_id === ''}
				loading={HandoverQrApi.isLoading}
			>
				<PoppinsTypography variant='subtitle1'>Handover</PoppinsTypography>
			</LoadingButton>
		</Stack>
	);
};

export default memo(HandoverQr);
