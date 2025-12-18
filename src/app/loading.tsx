export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-red-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block relative">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-[#EF4444] rounded-full animate-spin" />
        </div>
        <p className="mt-4 text-gray-600 text-sm">Loading...</p>
      </div>
    </div>
  );
}
