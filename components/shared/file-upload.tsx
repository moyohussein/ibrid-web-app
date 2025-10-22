interface FileUploadProps {
  label: string;
  accept: string;
  maxSize: string;
  description: string;
  onFileChange: (file: File | null) => void;
  value?: File | null;
}

export default function FileUpload({
  label,
  accept,
  maxSize,
  description,
  onFileChange,
  value,
}: FileUploadProps) {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];

    if (file) onFileChange(file);
  };

  return (
    <div className="w-full max-w-md">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
        {label}
      </label>
      <div
        className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-500 bg-gray-50 dark:bg-gray-800"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          accept={accept}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          type="file"
          onChange={(e) => onFileChange(e.target.files?.[0] || null)}
        />
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500">
            <svg
              className="h-full w-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 16V8m0 0l-4 4m4-4l4 4m6-4v8m-8 0h12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            Drag and drop your file here or click to browse
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {description} (Max: {maxSize})
          </p>
          {value && (
            <div className="mt-3 flex items-center justify-center space-x-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <p className="text-sm text-green-600 dark:text-green-400">
                Selected: {value.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
