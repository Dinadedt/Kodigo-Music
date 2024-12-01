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
    required:{
    value: true,
    message: "Nombre es requerido"
  },
    minLength:{
      value:3,
    message: "Nombre debe de tener almenos 2 caracteristicas"
    },
    maxLength: {
      value: 20,
      message: "Nombre debe de tener maximo 30 caracteres"
    }
  })}
  />
  {
    errors.nombre && <span> {errors.nombre.message} </span>
  }


   {/* correo */}
   <label htmlFor="correo">Correo</label>
    <input type="email" 
    {...register("correo", {
      required: {
        value: /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]+$/,
        message: "correo no balido"
      }
    })}
     />
     {
    errors.correo && <span>{errors.correo.message}</span>
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
    <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
<input type="date" 
    {...register("fechaNacimiento", {
        required: {
            value: true,
            message: "Fecha de nacimiento es requerida"
        },
        validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            
              return edad >= 18 || "Debes ser mayor de edad";
            
        }
    })}
/>
{errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}


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
