import { Box, IconButton, Tooltip } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

const EditAction = ({params}) => {

    const navigate = useNavigate();
    const handleEdit = () =>{
        navigate("/selectedEditPerson")
    }



    return(
        <Box>
            <Tooltip title="Editar">
                <IconButton onClick={handleEdit}>
                    <EditIcon/>
                </IconButton>
            </Tooltip>

        </Box>
    )

};

export default EditAction
