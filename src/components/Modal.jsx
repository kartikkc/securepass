import { useState } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const DeactivateModal = ({ heading, message, buttonText, onClose, route, cancelButton }) => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const handleOnClose = () => {
        onClose();
        navigate(route);
    }
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                        <ExclamationTriangleIcon className="w-6 h-6 text-red-600" aria-hidden="true" />
                    </div>
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
                        onClick={() => { setOpen(false); handleOnClose() }}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeactivateModal;