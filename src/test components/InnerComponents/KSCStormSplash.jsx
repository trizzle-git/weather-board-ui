import React, { useContext } from 'react'
import { Card} from '@mui/material';
import MobileInnerStorm from '../Inner Conditions/mobileInnerStorm';
import { AppContext } from '../../context/AppContext';




const KSCStormSplash = () => {
    const KSCSevere = ['KSC']
    const { storm } = useContext(AppContext)

    return (

        <Card elevation={10} sx={{paddingTop:'2%'}}>

            {KSCSevere.map((location, index) => <MobileInnerStorm key={index} states={storm.filter((item) => item.location === 'KSC')} location={location} />)}

        </Card>


    )
}

export default KSCStormSplash;