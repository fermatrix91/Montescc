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
            ViewBag.IdDeCurso = (int)Cursos.Ajedrez;

            return View("Modulos", listaDeModulos);
        }

        public ActionResult Contabilidad()
        {
            List<Modulo> listaDeModulos = new List<Modulo>();
            listaDeModulos = modeloMontes.Modulo.Where(x => x.IdCurso == (int)Cursos.Contabilidad).ToList();
            ViewBag.IdDeCurso = (int)Cursos.Contabilidad;

            return View("Modulos", listaDeModulos);
        }

        public ActionResult Html()
        {
            List<Modulo> listaDeModulos = new List<Modulo>();
            listaDeModulos = modeloMontes.Modulo.Where(x => x.IdCurso == (int)Cursos.Html).ToList();
            ViewBag.IdDeCurso = (int)Cursos.Html;

            return View("Modulos", listaDeModulos);
        }

        public ActionResult Web()
        {
            return View();
        }

        public ActionResult Ingles()
        {
            return View("LeccionIngles");
        }

        public ActionResult SeccionesCurso(int idModulo, string posicion, int idCurso)
        {
            Modulo moduloAMostrar = new Modulo();
            List<Seccion> listaDeSecciones = new List<Seccion>();

            if (posicion == "actual")
            {
                moduloAMostrar = modeloMontes.Modulo.Find(idModulo);
                listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == idModulo && x.Modulo.IdCurso == idCurso).ToList();
            }
            else
                if (posicion == "anterior")
                {
                    moduloAMostrar = modeloMontes.Modulo.Where(x => x.IdModulo < idModulo && x.IdCurso == idCurso).OrderByDescending(x => x.IdModulo).FirstOrDefault();
                    if (moduloAMostrar != null)
                        listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == moduloAMostrar.IdModulo).ToList();
                }
                else
                    if (posicion == "siguiente")
                    {
                        moduloAMostrar = modeloMontes.Modulo.Where(x => x.IdModulo > idModulo && x.IdCurso == idCurso).OrderBy(x => x.IdModulo).FirstOrDefault();
                        if (moduloAMostrar != null)
                            listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == moduloAMostrar.IdModulo && x.Modulo.IdCurso == idCurso).ToList();
                    }

            if (listaDeSecciones.Count == 0) return RedirectToAction(SaberCurso(modeloMontes.Modulo.Where(x => x.IdModulo == idModulo && x.IdCurso == idCurso).Select(y => y.IdCurso).FirstOrDefault()), "Curso");

            ViewBag.TituloModulo = moduloAMostrar.Nombre;
            ViewBag.IdModuloActual = moduloAMostrar.IdModulo;
            ViewBag.IdDeCurso = idCurso;
            ViewBag.ListaModulos = modeloMontes.Modulo.Where(x=>x.IdCurso == idCurso).ToList();

            return View("Secciones", listaDeSecciones);
        }

        string SaberCurso(int idCurso)
        {
            switch (idCurso)
            {
                case (int)Cursos.Ajedrez: return "Ajedrez";
                case (int)Cursos.Html: return "Html";
                case (int)Cursos.Contabilidad: return "Contabilidad";

                default: return "Ajedrez";
            }
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
        Html = 2,
        Contabilidad = 3,
        Inglés = 4
    }
}
