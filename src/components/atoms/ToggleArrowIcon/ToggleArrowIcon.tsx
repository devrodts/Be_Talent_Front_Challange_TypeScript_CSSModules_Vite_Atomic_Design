import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ToggleArrowIcon = ({isOpen}: {isOpen: boolean}) => {

    return (
        <div>
                {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
    )
    }

export default ToggleArrowIcon;