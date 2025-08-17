import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FC } from "react"
import { DialogTypeProps } from "./type"

export const CommonDialog: FC<DialogTypeProps> = ({ title, desc, children, open, onClose }) => {
    return (
        <Dialog
            open={open}
            onOpenChange={onClose}

        >
            <div>
                <DialogTrigger asChild>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {desc}
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        {children}
                    </div>

                </DialogContent>
            </div>
        </Dialog>
    )
}
