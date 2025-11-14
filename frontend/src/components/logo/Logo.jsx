import React from 'react'
import './style.logo.css'
import Wallet from '../../assets/wallet.png'

const Logo = ({}) => {

    const [isLoaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        setLoaded(true)
    }, [])

    return(
        <div className={`icon-container icon-active`}>
            <img src={Wallet} alt="wallet-icon"/>
        </div>
    )
}

export default Logo