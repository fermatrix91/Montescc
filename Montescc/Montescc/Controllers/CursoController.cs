using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Montescc.Models.DAL;

namespace Montescc.Controllers
{
    public class CursoController : Controller
    {
        //
        // GET: /Curso/

        private readonly MontesccEntities modeloMontes = new MontesccEntities();

        public ActionResult Ajedrez()
        {
            List<Modulo> listaDeModulos = new List<Modulo>();
            listaDeModulos = modeloMontes.Modulo.Where(x => x.IdCurso == (int)Cursos.Ajedrez).ToList();

            return View("Modulos", listaDeModulos);
        }

        public ActionResult SeccionesAjedrez(int idModulo)
        {
            List<Seccion> listaDeSecciones = new List<Seccion>();
            listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == idModulo).ToList();

            ViewBag.TituloModulo = listaDeSecciones.Select(y => y.Modulo.Nombre).FirstOrDefault();

            return View("Secciones", listaDeSecciones);
        }

        public ActionResult Contabilidad()
        {
            List<Modulo> listaDeModulos = new List<Modulo>();
            listaDeModulos = modeloMontes.Modulo.Where(x => x.IdCurso == (int)Cursos.Contabilidad).ToList();

            return View("Modulos", listaDeModulos);
        }

        public ActionResult SeccionesContabilidad(int idModulo)
        {
            List<Seccion> listaDeSecciones = new List<Seccion>();
            listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == idModulo).ToList();

            ViewBag.TituloModulo = listaDeSecciones.Select(y => y.Modulo.Nombre).FirstOrDefault();

            return View("Secciones", listaDeSecciones);
        }

        public ActionResult Ingles()
        {
            return View();
        }

        public ActionResult LeccionIngles(int? nivel)
        {
            ViewBag.NivelIngles = nivel;
            return View();
        }
    }
    public enum Cursos
    {
        Ajedrez = 1,
        Web = 2,
        Contabilidad = 3,
        Inglés = 4
    }
}
