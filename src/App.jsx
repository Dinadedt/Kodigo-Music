import {useForm} from 'react-hook-form'

function App() {
  const {register, handleSubmit, 
    formState: {errors}
  } = useForm();

  console.log(errors)

const onSubmit = handleSubmit((data)  => {
  console.log(data)
})

  return (
 <form onSubmit={onSubmit}>
  {/* nombre */}
  <label htmlFor="nombre">Nombre</label>
  <input 
  type="text" 
  {...register("nombre", {
    required: true,
    minLength: 5,
    maxLength:30
  })} 
  />
  {
    errors.nombre?.type == "required" && 
    <span>Nombre es requerido</span>
  }

{
    errors.nombre?.type == "required" && <span>
      Nombre debe de tener almenos 2 caracteres </span>
  }

   {/* correo */}
   <label htmlFor="correo">Correo</label>
    <input type="email" 
    {...register("correo", {
      required: true,
    })}
     />
     {
    errors.correo && <span>correo es requerido</span>
  }

    {/* password */}
   <label
   htmlFor="Password ">Password</label>
    <input type="Password" 
    {...register("Password", {
      required: true,
    })} />
  {
    errors.Password && <span>Password es requerido</span>
  }
    {/* confirmarPassword */}
   <label
   htmlFor="confirmarPassword ">Confirmar Password</label>
    <input type="Password" 
    {...register("confirmarPassword", {
      required: true,
    })} />
    {
    errors.confirmarPassword && <span>confirmarPassword</span>
  }

    {/* Fecha de nacimiento */}
   <label
   htmlFor="fechaNacimiento ">Fecha de nacimiento</label>
    <input type="date" 
    {...register("fechaNacimiento")} />

    {/* pais */}
   <label
   htmlFor="fechaNacimiento ">Pais</label>
    <select {...register("pais")} >
      <option value="mx">Mexico</option>
      <option value="co">Colombia</option>
      <option value="ar">Argentina</option>
    </select>

     {/* File */}
   <label htmlFor="foto ">Foto de perfil</label>
    <input type="file" 
    {...register("foto")} />

     {/* terminos */}
   <label
   htmlFor="terminos ">Asecto los terminos y condiciones</label>
    <input type="checkbox" 
    {...register("terminos", {
      required: true,
    })} />

    <button>
      Enviar
    </button>
  
 </form>
  )
}

export default App
