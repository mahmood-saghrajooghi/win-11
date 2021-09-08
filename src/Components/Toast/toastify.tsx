import React from 'react';
import { FaCheck, FaExclamation } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ToastContainerProps, ToastOptions } from 'react-toastify/dist/types';

interface MsgContent {
	title?: string;
	text?: string;
	link?: {
		text: string;
		to?: string;
	}
}
interface ToastifyOptions extends ToastOptions {
	content?: MsgContent;
}

interface MsgProps {
	closeToast: any;
	toastProps: ToastOptions;
	content?: MsgContent;
}

const Msg: React.FC<MsgProps> = ({ closeToast, toastProps, content }) => {
	let icon = null;
	switch (toastProps.type) {
		case toast.TYPE.SUCCESS:
			icon = <FaCheck className="icon" />;
			break;
		case toast.TYPE.WARNING:
			icon = <FaExclamation className="icon" />
			break;
		case toast.TYPE.ERROR:
			icon = <FaExclamation className="icon" />
			break;
	}

	return <div className="Toastify__toast-contnet">
		<div className="mx-0 no-wrap" style={{ display: "flex" }}>
			<span className="icon-container">
				{icon}
			</span>
			<div className="Toastify__toast-contnet-wrapper">
				<span className="title">{content?.title}</span>
				<span className="text">{content?.text}</span>
				{
					content?.link
						?
						content?.link.to
							? <NavLink
								to={content.link.to}
								className="link" >
								{content?.link.text}
							</NavLink>
							: <button className="link">
								{content.link.text}
							</button>
						: ""
				}
			</div>
		</div>
		<button className="Toastify__toast-close-btn" onClick={closeToast}><MdClose /></button>
	</div>
}

export const toastify = (options?: ToastifyOptions) => {
	return toast(
		({ closeToast, toastProps }) => (
			<Msg
				closeToast={closeToast}
				toastProps={toastProps}
				content={options?.content} />
		),
		options);
}
toastify.update = (toastId: string) => toast.update(toastId, { closeButton: false })

// export class toastify {
// 	constructor(options: ToastifyOptions) {
// 		toast(
// 			({ closeToast, toastProps }) => (
// 				<Msg
// 					closeToast={closeToast}
// 					toastProps={toastProps}
// 					content={options.content} />
// 			),
// 			options)
// 	}
// 	update(toastId: string) {
// 		toast.update(toastId)
// 	}
// }

export const ToastifyContainer: React.FC<ToastContainerProps> = (props: ToastContainerProps) => {
	return <ToastContainer {...props} closeButton={false} />
}