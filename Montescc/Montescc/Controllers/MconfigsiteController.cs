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
                List<Curso> listaDeCursos = new List<Curso>();
                listaDeCursos = montesModelo.Curso.ToList();

                return View(listaDeCursos);
            }
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public ActionResult DetalleCurso(int idCurso)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                List<Modulo> listaModulos = new List<Modulo>();
                listaModulos = montesModelo.Modulo.ToList();

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
                listaModulos = montesModelo.Modulo.ToList();

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
        public ActionResult GuardarModulo(int idDeModuloActual, int posicion, int idDeCursoActual, HttpPostedFileBase nombreImagen, string nombreModulo)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                Modulo moduloTemp = new Modulo();
                string urlImagen = "/Content/Cursos/";
                string idCursoActual = idDeCursoActual.ToString();
                string idModuloActual = idDeModuloActual.ToString();

                urlImagen += idCursoActual + "/Modulos/";

                if (idDeModuloActual == 0)
                {
                    moduloTemp.UrlImagen = urlImagen;
                    moduloTemp.IdModulo = idDeModuloActual;
                    moduloTemp.Nombre = nombreModulo;
                    moduloTemp.IdCurso = idDeCursoActual;
                    moduloTemp.Posicion = posicion;

                    montesModelo.Modulo.Add(moduloTemp);
                    montesModelo.Entry(moduloTemp).State = System.Data.EntityState.Added;
                    montesModelo.SaveChanges();

                    var rutaImagenTemp = urlImagen + moduloTemp.IdModulo;// idModuloActual;
                    string physicalPath = Server.MapPath("~" + rutaImagenTemp);
                    string pathTemporal = Path.Combine(physicalPath);
                    Directory.CreateDirectory(pathTemporal);

                    urlImagen = urlImagen + moduloTemp.IdModulo + '/' + nombreImagen.FileName;

                    moduloTemp = montesModelo.Modulo.Find(moduloTemp.IdModulo);
                    moduloTemp.UrlImagen = urlImagen;

                    montesModelo.Modulo.Attach(moduloTemp);
                    montesModelo.Entry(moduloTemp).State = System.Data.EntityState.Modified;
                    montesModelo.SaveChanges();

                    var pathImagen = Path.Combine(Server.MapPath(rutaImagenTemp + '/'), nombreImagen.FileName);
                    nombreImagen.SaveAs(pathImagen);
                }
                else
                {
                    var rutaImagenTemp = urlImagen + idModuloActual;
                    string physicalPath = Server.MapPath("~" + rutaImagenTemp);
                    string pathTemporal = Path.Combine(physicalPath);
                    Directory.CreateDirectory(pathTemporal);

                    moduloTemp = montesModelo.Modulo.Find(idDeModuloActual);
                    moduloTemp.Posicion = posicion;

                    if (nombreImagen != null)
                    {
                        urlImagen = urlImagen + idModuloActual + '/' + nombreImagen.FileName;
                        BorrarImagenRecurso(moduloTemp);
                        moduloTemp.UrlImagen = urlImagen;
                    }

                    moduloTemp.Nombre = nombreModulo;

                    montesModelo.Modulo.Attach(moduloTemp);
                    montesModelo.Entry(moduloTemp).State = System.Data.EntityState.Modified;
                    montesModelo.SaveChanges();

                    if (nombreImagen != null)
                    {
                        var pathImagen = Path.Combine(Server.MapPath(rutaImagenTemp + '/'), nombreImagen.FileName);
                        nombreImagen.SaveAs(pathImagen);
                    }
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

                return Json(new { IdModulo = seccionActual.IdModulo, Posicion = seccionActual.Posicion, Contenido = seccionActual.Contenido, Imagen = seccionActual.UrlImagen, }, JsonRequestBehavior.AllowGet);
            }
            WebSecurity.Logout();
            return RedirectToAction("Index", "Home");
        }


        [HttpPost]
        public ActionResult GuardarSeccion(int idDeModuloActual, int idDeSeccionActual, string tituloSeccion, int? posicion, int idDeCursoActual, HttpPostedFileBase nombreImagen, string contenidoSeccion)
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
            {
                Seccion seccioneTemp = new Seccion();
                string urlImagen = "/Content/Cursos/" + idDeCursoActual;
                string idCursoActual = idDeCursoActual.ToString();
                string idModuloActual = idDeModuloActual.ToString();

                urlImagen += idCursoActual + "/Modulos/" + idDeModuloActual + "/Secciones/";

                if (idDeSeccionActual == 0)
                {
                    seccioneTemp.UrlImagen = urlImagen;
                    seccioneTemp.IdModulo = idDeModuloActual;
                    seccioneTemp.Contenido = contenidoSeccion;
                    seccioneTemp.Posicion = posicion;
                    seccioneTemp.Titulo = tituloSeccion;

                    montesModelo.Seccion.Add(seccioneTemp);
                    montesModelo.Entry(seccioneTemp).State = System.Data.EntityState.Added;
                    montesModelo.SaveChanges();

                    var rutaImagenTemp = urlImagen + seccioneTemp.IdSeccion;
                    string physicalPath = Server.MapPath("~" + rutaImagenTemp);
                    string pathTemporal = Path.Combine(physicalPath);
                    Directory.CreateDirectory(pathTemporal);

                    urlImagen = urlImagen + seccioneTemp.IdSeccion + '/' + nombreImagen.FileName;

                    seccioneTemp = montesModelo.Seccion.Find(seccioneTemp.IdSeccion);
                    seccioneTemp.UrlImagen = urlImagen;

                    montesModelo.Seccion.Attach(seccioneTemp);
                    montesModelo.Entry(seccioneTemp).State = System.Data.EntityState.Modified;
                    montesModelo.SaveChanges();

                    var pathImagen = Path.Combine(Server.MapPath(rutaImagenTemp + '/'), nombreImagen.FileName);
                    nombreImagen.SaveAs(pathImagen);
                }
                else
                {
                    var rutaImagenTemp = urlImagen + idDeSeccionActual;
                    string physicalPath = Server.MapPath("~" + rutaImagenTemp);
                    string pathTemporal = Path.Combine(physicalPath);
                    Directory.CreateDirectory(pathTemporal);

                    seccioneTemp = montesModelo.Seccion.Find(idDeSeccionActual);
                    seccioneTemp.Posicion = posicion;
                    seccioneTemp.Titulo = tituloSeccion;

                    if (nombreImagen != null)
                    {
                        urlImagen = urlImagen + seccioneTemp.IdSeccion + '/' + nombreImagen.FileName;
                        BorrarImagenSeccion(seccioneTemp);
                        seccioneTemp.UrlImagen = urlImagen;
                    }

                    seccioneTemp.Contenido = contenidoSeccion;

                    montesModelo.Seccion.Attach(seccioneTemp);
                    montesModelo.Entry(seccioneTemp).State = System.Data.EntityState.Modified;
                    montesModelo.SaveChanges();

                    if (nombreImagen != null)
                    {
                        var pathImagen = Path.Combine(Server.MapPath(rutaImagenTemp + '/'), nombreImagen.FileName);
                        nombreImagen.SaveAs(pathImagen);
                    }
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
