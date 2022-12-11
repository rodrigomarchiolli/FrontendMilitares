import { Box, Button, TextField, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";


const initialValues= {

    Name: "",
    Batalhao: "",
    Rank: "",
    Genero: "",
    Data: "",
    LastTime: "",
    Formacao: "",
    Cargo: "",
    Birth: "",
    Idiomas: "",
    Cidade: "",
    Matricula: "",
    CCivis: "",
    CMilitares: "",
    CFormacao: "",
   
}

const userSchema = yup.object().shape({
    Name:       yup.string().required("required"),
    Batalhao:   yup.string().required("required"),
    Rank:       yup.string().required("required"),
    Genero:     yup.string().required("required"),
    Data:       yup.string().required("required"),
    LastTime:   yup.string().required("required"),
    Formacao:   yup.string().required("required"),
    Cargo:      yup.string().required("required"),
    Birth:      yup.string().required("required"),
    Idiomas:    yup.string().required("required"),
    Cidade:     yup.string().required("required"),
    Matricula:  yup.string().required("required"),
    CCivis:     yup.string().required("required"),
    CMilitares: yup.string().required("required"),
    CFormacao:  yup.string().required("required"),
    
})



const SelectedEditPerson = () =>{
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) =>{
        console.log(values);
    }

    return(
        <Box m="20px" >
            <Header title="Editar Pessoa" subtitle="Editar Perfil de Usuário"/>

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}>

                    {({values, errors, touched, handleBlur, handleChange, handleSubmit })=>(
                        <form onSubmit={handleSubmit}>
                            <Box 
                                display="grid" 
                                gap="50px" 
                                gridTemplateColumns="repeat(3,minmax(0, 1fr))"
                                gridTemplateRows="repeat(2,minmax(0,1fr))"
                                sx={{
                                    "& > div": {gridColumn: isNonMobile ? undefined : "span 4"},
                                }}>

                                    {/* ALL LABELS */}
                                    {/* 1 */}
                                    

                                    <TextField

                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Digite seu nome"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Name}
                                        name="Name"
                                        error={!!touched.Name && !!errors.Name}
                                        helperText={touched.Name && errors.Name}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 2 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Digite seu Batalhão"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Batalhao}
                                        name="Batalhao"
                                        error={!!touched.Batalhao && !!errors.Batalhao}
                                        helperText={touched.Batalhao && errors.Batalhao}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 3 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Digite o Rank"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Rank}
                                        name="Rank"
                                        error={!!touched.Rank && !!errors.Rank}
                                        helperText={touched.Rank && errors.Rank}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 4 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Digite o Genero"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Genero}
                                        name="Genero"
                                        error={!!touched.Genero && !!errors.Genero}
                                        helperText={touched.Genero && errors.Genero}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 5 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="dd/mm/aa"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Data}
                                        name="Data"
                                        error={!!touched.Data && !!errors.Data}
                                        helperText={touched.Data && errors.Data}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 6 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="dd/mm/aa"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.LastTime}
                                        name="LastTime"
                                        error={!!touched.LastTime && !!errors.LastTime}
                                        helperText={touched.LastTime && errors.LastTime}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 7 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Digite o Formação"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Formacao}
                                        name="Formacao"
                                        error={!!touched.Formacao && !!errors.Formacao}
                                        helperText={touched.Formacao && errors.Formacao}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 8 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Digite o Cargo"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Cargo}
                                        name="Cargo"
                                        error={!!touched.Cargo && !!errors.Cargo}
                                        helperText={touched.Cargo && errors.Cargo}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 9 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="dd/mm/aa"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Birth}
                                        name="Birth"
                                        error={!!touched.Birth && !!errors.Birth}
                                        helperText={touched.Birth && errors.Birth}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 10 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Selecione o Idioma"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Idiomas}
                                        name="Idiomas"
                                        error={!!touched.Idiomas && !!errors.Idiomas}
                                        helperText={touched.Idiomas && errors.Idiomas}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 11 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Digite o Cidade"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Cidade}
                                        name="Cidade"
                                        error={!!touched.Cidade && !!errors.Cidade}
                                        helperText={touched.Cidade && errors.Cidade}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 12 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Digite o Matricula"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.Matricula}
                                        name="Matricula"
                                        error={!!touched.Matricula && !!errors.Matricula}
                                        helperText={touched.Matricula && errors.Matricula}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 13 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Selecione o Curso"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.CCivis}
                                        name="CCivis"
                                        error={!!touched.CCivis && !!errors.CCivis}
                                        helperText={touched.CCivis && errors.CCivis}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 14 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Selecione o Curso"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.CMilitares}
                                        name="CMilitares"
                                        error={!!touched.CMilitares && !!errors.CMilitares}
                                        helperText={touched.CMilitares && errors.CMilitares}
                                        sx ={{gridColumn: "span 1"}}
                                    />
                                    {/* 15 */}
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Digite o CFormacao"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.CFormacao}
                                        name="CFormacao"
                                        error={!!touched.CFormacao && !!errors.CFormacao}
                                        helperText={touched.CFormacao && errors.CFormacao}
                                        sx ={{gridColumn: "span 1"}}
                                    />
     
                            
                            </Box>

                            <Box>
                                <Box display="flex" justifyContent="end" mt="20px">
                                    <Button type="submit" color="secondary" variant="contained">
                                        Create New User
                                    </Button>

                                </Box>
                            </Box>
                        
                        </form>
                    )}
        
            </Formik>

        </Box>
    );

};

export default SelectedEditPerson;