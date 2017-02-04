using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMatrix.WebData;
using Montescc.Models.DAL;
using System.IO;

namespace Montescc.Controllers
{
    [HandleError]
    [Authorize]
    public class MconfigsiteController : Controller
    {
        //
        // GET: /Mconfigsite/
        private readonly MontesccEntities montesModelo = new MontesccEntities();

        public ActionResult Mcursos()
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                //List<Curso> listaDeCursos = new List<Curso>();
                //listaDeCursos = montesModelo.Curso.ToList();

                return View();//listaDeCursos);
            }
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }

        //[HttpPost]
        public ActionResult DetalleCurso(int idCurso)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                List<Modulo> listaModulos = new List<Modulo>();
                listaModulos = montesModelo.Modulo.Where(x => x.IdCurso == idCurso).ToList();

                ViewBag.NombreCurso = montesModelo.Curso.Find(idCurso).Nombre;
                ViewBag.IdCurso = idCurso;

                return View("DetalleCurso", listaModulos);
            }
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }

        public ActionResult RecargaModulosActual(int idCurso)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                List<Modulo> listaModulos = new List<Modulo>();
                listaModulos = montesModelo.Modulo.Where(x => x.IdCurso == idCurso).ToList();

                ViewBag.NombreCurso = montesModelo.Curso.Find(idCurso).Nombre;
                ViewBag.IdCurso = idCurso;

                return View("DetalleCurso", listaModulos);
            }
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }

        public ActionResult DetalleModulo(int idModuloActual, int idCursoActual)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                Modulo moduloActual = new Modulo();
                moduloActual = montesModelo.Modulo.Find(idModuloActual);

                return Json(new { IdModulo = moduloActual.IdModulo, Posicion = moduloActual.Posicion, Nombre = moduloActual.Nombre, Imagen = moduloActual.UrlImagen, }, JsonRequestBehavior.AllowGet);
            }
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public ActionResult GuardarModulo(int idDeModuloActual, int posicion, int idDeCursoActual, string nombreImagen, string nombreModulo)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                Modulo moduloTemp = new Modulo();
                string idCursoActual = idDeCursoActual.ToString();
                string idModuloActual = idDeModuloActual.ToString();

                if (idDeModuloActual == 0)
                {
                    //moduloTemp.IdModulo = idDeModuloActual;
                    moduloTemp.UrlImagen = nombreImagen;
                    moduloTemp.Nombre = nombreModulo;
                    moduloTemp.IdCurso = idDeCursoActual;
                    moduloTemp.Posicion = posicion;

                    montesModelo.Modulo.Add(moduloTemp);
                    montesModelo.Entry(moduloTemp).State = System.Data.EntityState.Added;
                    montesModelo.SaveChanges();
                }
                else
                {
                    moduloTemp = montesModelo.Modulo.Find(idDeModuloActual);
                    moduloTemp.Posicion = posicion;
                    moduloTemp.UrlImagen = nombreImagen;
                    moduloTemp.Nombre = nombreModulo;

                    montesModelo.Modulo.Attach(moduloTemp);
                    montesModelo.Entry(moduloTemp).State = System.Data.EntityState.Modified;
                    montesModelo.SaveChanges();
                }
                return RedirectToAction("RecargaModulosActual", new { idCurso = idDeCursoActual });
            }
            WebSecurity.Logout();
            return RedirectToAction("Login", "Account");
        }


        [HttpPost]
        public ActionResult SeccionesPorModulo(int idModuloSecciones)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                List<Seccion> listaSecciones = new List<Seccion>();
                listaSecciones = montesModelo.Seccion.Where(x => x.IdModulo == idModuloSecciones).ToList();

                Modulo moduloTemp = new Modulo();
                moduloTemp = montesModelo.Modulo.Find(idModuloSecciones);

                ViewBag.NombreModulo = moduloTemp.Nombre;
                ViewBag.IdModulo = idModuloSecciones;
                ViewBag.IdCurso = moduloTemp.IdCurso;

                return View("SeccionesPorModulo", listaSecciones);
            }
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }

        public ActionResult RecargaSeccionesActual(int idModuloSecciones)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                List<Seccion> listaSecciones = new List<Seccion>();
                listaSecciones = montesModelo.Seccion.Where(x => x.IdModulo == idModuloSecciones).ToList();

                Modulo moduloTemp = new Modulo();
                moduloTemp = montesModelo.Modulo.Find(idModuloSecciones);

                ViewBag.NombreModulo = moduloTemp.Nombre;
                ViewBag.IdModulo = idModuloSecciones;
                ViewBag.IdCurso = moduloTemp.IdCurso;

                return View("SeccionesPorModulo", listaSecciones);
            }
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }

        public ActionResult DetalleSeccion(int idSeccionActual, int idCursoActual)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                Seccion seccionActual = new Seccion();
                seccionActual = montesModelo.Seccion.Find(idSeccionActual);

                return Json(new
                {
                    IdModulo = seccionActual.IdModulo,
                    Posicion = seccionActual.Posicion,
                    Contenido = seccionActual.Contenido,
                    PrimeraImagen = seccionActual.UrlImagen,
                    SegundaImagen = seccionActual.UrlSegundaImagen,
                    NombrePrimeraImagen = seccionActual.NombreImagenUno,
                    NombreSegundaImagen = seccionActual.NombreImagenDos
                }, JsonRequestBehavior.AllowGet);
            }
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }


        [HttpPost, ValidateInput(false)]
        public ActionResult GuardarSeccion(int idDeModuloActual, int idDeSeccionActual, string tituloSeccion, int? posicion, int idDeCursoActual, string nombrePrimerImagen,
            string nombreSegundaImagen, string contenidoSeccion, string nombreImagenUno, string nombreImagenDos)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                Seccion seccioneTemp = new Seccion();

                if (idDeSeccionActual == 0)
                {
                    seccioneTemp.UrlImagen = nombrePrimerImagen;
                    seccioneTemp.NombreImagenUno = nombreImagenUno;
                    seccioneTemp.UrlSegundaImagen = nombreSegundaImagen;
                    seccioneTemp.NombreImagenDos = nombreImagenDos;
                    seccioneTemp.IdModulo = idDeModuloActual;
                    seccioneTemp.Contenido = contenidoSeccion;
                    seccioneTemp.Posicion = posicion;
                    seccioneTemp.Titulo = tituloSeccion;

                    montesModelo.Seccion.Add(seccioneTemp);
                    montesModelo.Entry(seccioneTemp).State = System.Data.EntityState.Added;
                    montesModelo.SaveChanges();
                }
                else
                {
                    seccioneTemp = montesModelo.Seccion.Find(idDeSeccionActual);
                    seccioneTemp.Posicion = posicion;
                    seccioneTemp.Titulo = tituloSeccion;
                    seccioneTemp.UrlImagen = nombrePrimerImagen;
                    seccioneTemp.NombreImagenUno = nombreImagenUno;
                    seccioneTemp.UrlSegundaImagen = nombreSegundaImagen;
                    seccioneTemp.NombreImagenDos = nombreImagenDos;

                    seccioneTemp.Contenido = contenidoSeccion;

                    montesModelo.Seccion.Attach(seccioneTemp);
                    montesModelo.Entry(seccioneTemp).State = System.Data.EntityState.Modified;
                    montesModelo.SaveChanges();
                }
                return RedirectToAction("RecargaSeccionesActual", new { idModuloSecciones = idDeModuloActual });
            }
            WebSecurity.Logout();
            return RedirectToAction("Login", "Account");
        }

        private void BorrarImagenSeccion(Seccion seccione)
        {
            string fullPath = Request.MapPath("~" + seccione.UrlImagen);
            if (System.IO.File.Exists(fullPath))
            {
                System.IO.File.Delete(fullPath);
            }
        }

        public ActionResult QuitarImagen(int idSeccionActual)
        {
            Seccion seccionActual = montesModelo.Seccion.Find(idSeccionActual);
            try
            {
                string fullPath = Request.MapPath("~" + seccionActual.UrlImagen);
                if (System.IO.File.Exists(fullPath))
                {
                    System.IO.File.Delete(fullPath);
                }

                seccionActual.UrlImagen = null;
                montesModelo.Seccion.Attach(seccionActual);
                montesModelo.Entry(seccionActual).State = System.Data.EntityState.Modified;
                montesModelo.SaveChanges();

                return RedirectToAction("RecargaSeccionesActual", new { idModuloSecciones = seccionActual.IdModulo });
            }
            catch (Exception mensaje)
            {
                return RedirectToAction("RecargaSeccionesActual", new { idModuloSecciones = seccionActual.IdModulo });
            }
        }

        private void BorrarImagenRecurso(Modulo modulo)
        {
            string fullPath = Request.MapPath("~" + modulo.UrlImagen);
            if (System.IO.File.Exists(fullPath))
            {
                System.IO.File.Delete(fullPath);
            }
        }


        public ActionResult CerrarSesion()
        {
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }

    }
}
