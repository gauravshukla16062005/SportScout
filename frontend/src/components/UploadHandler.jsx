import useUpload from "../hooks/useUpload";

export default function UploadHandler({ children }) {

  const {
    fileInputRef,
    selectedFile,
    uploading,
    progress,
    openFinder,
    handleFileChange,
  } = useUpload();

  return (
    <>

      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div onClick={openFinder} className="cursor-pointer">
        {children}
      </div>

      {selectedFile && !uploading && (
        <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4">

          <p className="font-semibold text-green-400">

            Selected Video

          </p>

          <p className="mt-2 text-sm text-gray-300">

            {selectedFile.name}

          </p>

        </div>
      )}

      {uploading && (
        <div className="mt-6">

          <p className="mb-2 font-semibold">

            Uploading Video...

          </p>

          <div className="h-3 w-full rounded-full bg-zinc-800">

            <div
              className="h-3 rounded-full bg-red-600 transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p className="mt-2 text-sm text-gray-400">

            {progress}%

          </p>

        </div>
      )}

    </>
  );
}