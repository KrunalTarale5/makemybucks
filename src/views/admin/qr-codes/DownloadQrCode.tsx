import { useSnackbar } from '@components/Snackbar';
import { PoppinsTypography } from '@components/Typography';
import { useDownloadQRApi, useGetQRBgUrlsApi, useUpdateQRBgApi } from '@hooks/admin-qrcode';
import { Option } from '@interfaces/common';
import { LoadingButton } from '@mui/lab';
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Stack,
	useTheme,
} from '@mui/material';
import { FC, memo, useState } from 'react';
import { useAlertDialog } from '@components/AlertDialog';
import JSZip from 'jszip';
import { generateQrOnBanner } from 'qr-on-banner';

const BUTTONS = [500, 1000, 2000, 3000, 4000, 5000, 6000];
const IMAGES: Option[] = [
	{ label: 'Image1', value: 'bg_url_1' },
	{ label: 'Image2', value: 'bg_url_2' },
	{ label: 'Image3', value: 'bg_url_3' },
];

interface DownloadQrCodeProps {
	refetch: () => void;
}

const DownloadQrCode: FC<DownloadQrCodeProps> = (props) => {
	const theme = useTheme();
	const { showSnackbar, hideSnackbar } = useSnackbar();
	const { showAlertDialog, hideAlertDialog } = useAlertDialog();

	const GetQRBgUrlsApi = useGetQRBgUrlsApi();
	const DownloadQRApi = useDownloadQRApi();

	const [selectedButton, setSelectedButton] = useState<number | null>(null);
	const [selectedImage, setSelectedImage] = useState<Option | null>(null);
	const [openQRBgDialog, setOpenQRBgDialog] = useState<Option | null>(null);
	const [isDownloading, setIsDownloading] = useState<boolean>(false);

	const zip = new JSZip();

	const OnDownloadClick = () => {
		const selectedImgUrl =
			GetQRBgUrlsApi.data?.data.bg_urls[
				IMAGES.findIndex((i) => i.value === selectedImage?.value)
			] ?? '';

		if (!selectedImgUrl) {
			showAlertDialog({
				title: `Download QR Code`,
				content: 'No image associated with the selected image.',
				buttons: [
					{
						children: 'ok',
						variant: 'outlined',
						callback: () => {
							hideAlertDialog();
						},
					},
				],
			});
			return;
		}
		setIsDownloading(true);
		showAlertDialog({
			title: `Download QR Code`,
			content: 'Are Your sure you want to download QR Code?',
			buttons: [
				{
					children: 'Cancel',
					variant: 'outlined',
					callback: () => {
						hideAlertDialog();
					},
				},
				{
					children: 'Download',
					variant: 'contained',
					callback: () => {
						hideAlertDialog();
						void DownloadQRApi.mutateAsync({
							request: {
								number: selectedButton as number,
							},
						})
							.then((response) => {
								Promise.all(
									response.data.download_list.map((code) =>
										generateQrOnBanner({
											stringToCreateQR: `${String(process.env.REACT_APP_PAYMENT_URL)}${code.qr_id}`,
											bannerImg: selectedImgUrl,
											bannerText: code.qr_id,
										})
									)
								)
									.then((a) => {
										a.map((x) => {
											zip.file(`${x.bannerText}.png`, x.blob as Blob, { binary: true });
										});
										zip
											.generateAsync({ type: 'blob' })
											.then((blobdata) => {
												const elem = window.document.createElement('a');
												elem.href = window.URL.createObjectURL(new Blob([blobdata]));
												elem.download = 'qrcodes.zip';
												elem.click();
											})
											.then(() => {
												setIsDownloading(false);
												props.refetch();
											})
											.catch(() => {
												setIsDownloading(false);
											});
									})
									.catch(() => {
										setIsDownloading(false);
									});
							})
							.catch((error) => {
								setIsDownloading(false);
								showSnackbar({
									title: 'Error!',
									variant: 'error',
									content: error.response?.data?.message,
									onCancel: () => hideSnackbar(),
								});
							});
					},
				},
			],
		});
	};

	return (
		<Stack gap={1}>
			<PoppinsTypography
				variant='subtitle1'
				sx={{ color: theme.palette.common.secondaryGreyText }}
			>
				Select Number
			</PoppinsTypography>
			<Stack gap={5}>
				<Stack
					flexDirection={'row'}
					gap={1}
				>
					{BUTTONS.map((l, index) => (
						<Button
							key={index}
							size='large'
							variant={selectedButton === l ? 'contained' : 'outlined'}
							color='primary'
							sx={{
								...(selectedButton === l && { borderColor: '#DFE3ED' }),
								width: 100,
								height: 40,
								borderRadius: '8px',
							}}
							onClick={() => setSelectedButton(l)}
						>
							{l}
						</Button>
					))}
				</Stack>
				<Stack>
					<PoppinsTypography
						variant='subtitle1'
						sx={{ color: theme.palette.common.secondaryGreyText }}
					>
						Select Image
					</PoppinsTypography>
					<FormControl>
						<RadioGroup
							row
							value={selectedImage?.value}
							onChange={(e) =>
								setSelectedImage(IMAGES.find((i) => i.value === e.target.value) ?? null)
							}
							sx={{ gap: 2 }}
						>
							{IMAGES.map((l, index) => (
								<FormControlLabel
									key={index}
									value={l.value}
									control={<Radio size='medium' />}
									label={
										<PoppinsTypography
											variant='h6'
											sx={{
												color: GetQRBgUrlsApi.data?.data.bg_urls[index]
													? theme.palette.success.main
													: theme.palette.common.secondaryGreyText,
											}}
											onClick={() => setOpenQRBgDialog({ label: l.label, value: String(index) })}
										>
											{l.label}
										</PoppinsTypography>
									}
								/>
							))}
						</RadioGroup>
					</FormControl>
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
					disabled={selectedButton === null || selectedImage === null}
					loading={isDownloading}
					onClick={OnDownloadClick}
				>
					<PoppinsTypography variant='subtitle1'>Download QR</PoppinsTypography>
				</LoadingButton>
			</Stack>
			<HandleQRBgImageDialog
				imageUrl={GetQRBgUrlsApi.data?.data.bg_urls[Number(openQRBgDialog?.value)] ?? ''}
				openQRBgDialog={openQRBgDialog}
				handleClose={() => setOpenQRBgDialog(null)}
				refetch={() => void GetQRBgUrlsApi.refetch()}
			/>
		</Stack>
	);
};

export default memo(DownloadQrCode);

interface HandleQRBgImageProps {
	openQRBgDialog: Option | null;
	imageUrl: string;
	handleClose?: () => void;
	refetch: () => void;
}

const HandleQRBgImageDialog = (props: HandleQRBgImageProps) => {
	const theme = useTheme();
	const { showSnackbar, hideSnackbar } = useSnackbar();
	const UpdateQRBgApi = useUpdateQRBgApi();

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		UpdateQRBgApi.mutateAsync({
			request: { [`bg_url_${Number(props.openQRBgDialog?.value) + 1}`]: event.target.files },
		})
			.then((response) => {
				showSnackbar({
					title: 'Success!',
					variant: 'sucess',
					content: response.data?.message,
					onCancel: () => hideSnackbar(),
				});
				props.refetch();
				props.handleClose?.();
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
		<Dialog
			onClose={props.handleClose}
			open={Boolean(props.openQRBgDialog)}
			maxWidth='sm'
			sx={{ '.MuiPaper-root': { width: `100%` } }}
		>
			<DialogTitle sx={{ padding: 4, paddingBottom: 3 }}>
				<PoppinsTypography
					variant='h5'
					sx={{ color: theme.palette.common.primaryGreyText }}
				>
					QR Background {props.openQRBgDialog?.label}
				</PoppinsTypography>
			</DialogTitle>
			<DialogContent
				sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 6, padding: 4 }}
			>
				{props.imageUrl ? (
					<img
						width={206}
						height={333}
						src={props.imageUrl}
					/>
				) : (
					<Stack
						width={206}
						height={333}
						sx={{ backgroundColor: '#DFE3ED' }}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<PoppinsTypography variant='subtitle1'>No Image Found</PoppinsTypography>
					</Stack>
				)}
				<Stack
					flexDirection={'row'}
					gap={2}
					alignSelf={'self-end'}
				>
					<LoadingButton
						variant='outlined'
						size='large'
						sx={{ width: 245 }}
						onClick={props.handleClose}
					>
						<PoppinsTypography
							variant='h5'
							sx={{ color: theme.palette.common.primaryGreyText }}
						>
							Back
						</PoppinsTypography>
					</LoadingButton>

					<label htmlFor={`upoload-qr-bg`}>
						<input
							id={`upoload-qr-bg`}
							name={`upoload-qr-bg`}
							style={{
								opacity: 0,
								position: 'absolute',
								width: 'inherit',
								height: 'inherit',
							}}
							type='file'
							onChange={onChange}
							onClick={(event) => (event.currentTarget.value = '')}
						/>
						<LoadingButton
							component='span'
							variant='contained'
							size='large'
							sx={{ width: 245 }}
							loading={UpdateQRBgApi.isLoading}
						>
							<PoppinsTypography variant='h5'>
								{props.imageUrl ? 'Update Image' : 'Upload Image'}
							</PoppinsTypography>
						</LoadingButton>
					</label>
				</Stack>
			</DialogContent>
		</Dialog>
	);
};
