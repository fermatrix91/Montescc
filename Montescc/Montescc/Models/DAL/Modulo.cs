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
    
    public partial class Modulo
    {
        public Modulo()
        {
            this.Seccion = new HashSet<Seccion>();
        }
    
        public int IdModulo { get; set; }
        public int IdCurso { get; set; }
        public string Nombre { get; set; }
        public string UrlImagen { get; set; }
    
        public virtual Curso Curso { get; set; }
        public virtual ICollection<Seccion> Seccion { get; set; }
    }
}
