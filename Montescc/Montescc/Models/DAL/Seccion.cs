//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Montescc.Models.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Seccion
    {
        public int IdSeccion { get; set; }
        public int IdModulo { get; set; }
        public string Titulo { get; set; }
        public string Contenido { get; set; }
        public string UrlImagen { get; set; }
        public Nullable<int> Posicion { get; set; }
        public string UrlSegundaImagen { get; set; }
    
        public virtual Modulo Modulo { get; set; }
    }
}
