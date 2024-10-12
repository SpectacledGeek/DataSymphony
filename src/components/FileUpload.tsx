"use client"

import { UploadDropzone } from "@/lib/uploadthing"
import { OurFileRouter } from "@/app/api/uploadthing/core"
import { toast } from "sonner";

interface UploadResponse {
    url: string;
}

interface FileUploadProps {
    onChange: (url?: string) => void
    endpoint: keyof OurFileRouter
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
    return (
        <UploadDropzone
            onClientUploadComplete={(res: UploadResponse[] | undefined) => {
                if (res && res.length > 0) {
                    onChange(res[0].url);
                } else {
                    onChange(undefined);
                }
            }}
            endpoint={endpoint}
            onUploadError={(err: Error) => {
                toast.error(`${err?.message}`);
            }}
        />
    )
}