import { useState } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const DeactivateModal = ({ heading, icon, message, buttonText, onClose, route, cancelButton, logout, color, onConfirm }) => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const handleOnClose = async () => {
        onClose();
        if (onConfirm) {
            await onConfirm();
            navigate(route);
        }
        if (logout) {
            localStorage.removeItem("token");
            navigate(route);
        }
        else {
            navigate(route);
        }
    }

    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <div className="flex items-start">
                    {icon && <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                        <ExclamationTriangleIcon className="w-6 h-6 text-red-600" aria-hidden="true" />
                    </div>}
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{heading}</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            {message}
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex justify-end space-x-2">
                    {cancelButton && <button
                        onClick={() => setOpen(false)}
                        className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
                    >
                        Cancel
                    </button>}
                    <button
                        onClick={() => { handleOnClose(); setOpen(false); }}
                        className={`${color ? color : "bg-red-600 hover:bg-red-500"} text-white px-4 py-2 rounded-md `}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeactivateModal;