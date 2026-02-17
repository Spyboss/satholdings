export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin" />
                <p className="text-neutral-500 text-sm">Loading...</p>
            </div>
        </div>
    );
}
