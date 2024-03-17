import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-[200px] p-4 space-y-5 flex flex-col'>
            <Button variant={'default'}>
                Default
            </Button>
            <Button variant={'primary'}>
                Primary
            </Button>
            <Button variant={'primaryOutline'}>
                Primary Outline
            </Button>
            <Button variant={'secondary'}>
                Secondary
            </Button>
            <Button variant={'secondaryOutline'}>
                Secondary Outline
            </Button>
            <Button variant={'danger'}>
                Danger
            </Button>
            <Button variant={'dangerOutline'}>
                Danger Outline
            </Button>
            <Button variant={'super'}>
                Super
            </Button>
            <Button variant={'superOutline'}>
                Super Outline
            </Button>
            <Button variant={'ghost'}>
                ghost
            </Button>
            <Button variant={'sidebar'}>
                Sidebar
            </Button>
            <Button variant={'sidebarOutline'}>
                Sidebar Outline
            </Button>
        </div>
    )
}

export default page