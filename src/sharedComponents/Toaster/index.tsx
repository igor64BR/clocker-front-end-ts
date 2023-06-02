import { type ToastOptions, toast, Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastConfigs: ToastOptions<any> = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  transition: Flip,
};

export const toastEmitter = {
  error: (error: string) => toast.error(error, toastConfigs),
  success: (message: string) => toast.success(message, toastConfigs),
  warn: (message: string) => toast.warn(message, toastConfigs),
  info: (message: string) => toast.info(message, toastConfigs),
  default: (message: string) => toast(message, toastConfigs),
};

export function Toast() {
  return <ToastContainer {...toastConfigs} newestOnTop={false} rtl={false} />;
}
