'use client'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

const PageTitle = ({ heading, text, path = "/", linkText }) => {
    <PageTitle
        heading="Contact Us"
        text="We'd love to hear from you"
        linkText="Go to home"
        path="/"
    />
    return (
        <div className="my-6">
            <h2 className="text-2xl font-semibold">{heading}</h2>
            <div className="flex items-center gap-3">
                <p className="text-slate-600">{text}</p>
                <Link href={path} className="flex items-center gap-1 text-green-500 text-sm">
                    {linkText} <ArrowRightIcon size={14} />
                </Link>
            </div>
        </div>
    )
}

export default PageTitle