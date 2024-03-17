import Footer from './Footer'
import Header from './header'

type Props = {
    children: React.ReactNode
}

const marketingLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            { children }
            <Footer/>
        </div>
    )
}

export default marketingLayout
