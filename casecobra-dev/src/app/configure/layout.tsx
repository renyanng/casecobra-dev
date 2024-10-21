import {ReactNode} from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Steps from '@/components/ui/Steps'
const Layout = ({children}: {children: React.ReactNode}) => {
    return (<MaxWidthWrapper className='flex-1 flex flex-col'>
        <Steps />
        {children}
    </MaxWidthWrapper>
    )
}

export default Layout