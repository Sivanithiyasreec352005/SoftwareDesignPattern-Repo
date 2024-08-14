import { ModeToggle } from '../mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Topbar = () => {
    return (
        <div className='h-[6vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
            <div className='w-[95%] h-full flex items-center justify-end gap-4'>
                <ModeToggle/>
                <Avatar>
                    <AvatarImage src="https://ik.imagekit.io/sns3305/SDPPRO/snsdpfile.png?updatedAt=1722102659323" alt="@shadcn" />
                    <AvatarFallback>SNS</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Topbar