import React, { useState } from 'react'
import { Tab, Tabs } from '@mui/material'

import About from './about.component'
import Preferences from './preferences.component'
import { About as AboutIcon, Preferences as PreferencesIcon } from '../lib/icons.component'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number,
    value: number
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props
    return (
        <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} {...other} className="w-80">
            {
                value === index && (<div>{children}</div>)
            }
        </div>
    )
}

// eslint-disable-next-line
const Settings = () => {
    const [tabIndex, setTabIndex] = useState<number>(0)
    
    return (
        <div className="flex-nowrap w-100" id="settings">
            <Tabs orientation="vertical" value={tabIndex} onChange={(_, index: number) => setTabIndex(index)} className="w-20">
                <Tab icon={<PreferencesIcon />} label="Preferences" />
                <Tab icon={<AboutIcon />} label="About" />
            </Tabs>
            <TabPanel value={tabIndex} index={0}><Preferences /></TabPanel>
            <TabPanel value={tabIndex} index={1}><About /></TabPanel>
        </div>
    )
}

export default Settings