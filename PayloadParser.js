
function parseUplink(device, payload)
{     
    //Primer paso, leo lo que me llegó en payload como json porque se que lo que llega es un json    
    var data = payload.asJsonObject();
    
    //Segundo paso, leo el campo Nombre del JSON y lo logueo para ver que leo del JSON
    var nombre = data.Nombre;
    var apellido = data.Apellido;
    var edad = data.Edad;
    var supervivencia = data.Supervivencia;
    var fNacimiento = data.FechaNacimiento;
    var direccion = data.Direccion;
    var localidad = data.Localidad;         

    env.log("El nombre de la persona es:", nombre);
    env.log ("el apellido de la persona es: ", apellido);
    env.log ("La edad de la persona es: ", edad);
    env.log ("la persona vive: ", supervivencia);
    env.log ("la fecha de nacimiento de la persona es: ", fNacimiento)
    env.log ("la dirección de la persona: ", direccion)
    env.log("la localidad de la persona es: ", localidad)


    //Obtengo el endpoint en el que quiero almacenar el dato "nombre de la persona"
    var epNombre = device.endpoints.byAddress("Ep_add1")
        
    // Si el endpoint existe y el nombre que lei del json no es null, actualizo el endpoint donde quiero almacenar el nuevo estado
    if (epNombre != null && nombre != null)
    {
        epNombre.UpdateTextContainerStatus(nombre)
        env.log("Endpoint address Ep_add1 actualizado con estado: ", nombre)
    }    
    
    var epApellido = device.endpoints.byAddress("Ep_add2")
      if (epApellido != null && apellido != null)
        {
            epApellido.UpdateTextContainerStatus(apellido)
            env.log("Endpoint address Ep_add2 actualizado con estado: ", apellido)
        }
    
    var epEdad = device.endpoints.byAddress("Ep_add3")
      if (epEdad != null && edad != null)
        {
            epEdad.UpdateGenericSensorStatus(edad)
            env.log ("Endpoint address Ep_add3 actualizado con estado: ", edad)
        }
        
    var epSupervivencia = device.endpoints.byAddress ("Ep_add4")
        if (epSupervivencia != null && supervivencia != null)
        {
            epSupervivencia.UpdateGenericSensorStatus(supervivencia)
            env.log("Endpoint address Ep_add4 actualizado con estado: " , supervivencia)
        }
        
    var epFenac = device.endpoints.byAddress("Ep_add5")
        if(epFenac != null & fNacimiento != null)
        {
            epFenac.UpdateTextContainerStatus(fNacimiento)
            env.log(fNacimiento)
        }
    var epDire = device.endpoints.byAddress("Ep_add6")
        if(epDire != null & direccion != null)
        {
            epDire.UpdateTextContainerStatus(direccion)
            env.log(direccion)
        }
    
    var epLocal = device.endpoints.byAddress("Ep_add7")
        if(epLocal != null & localidad != null)
        {
            epLocal.UpdateTextContainerStatus(localidad)
            env.log(localidad)
        }
}

