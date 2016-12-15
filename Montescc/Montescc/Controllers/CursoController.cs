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

        public ActionResult SeccionesCurso(int idModulo, string posicion)
        {
            Modulo moduloAMostrar = new Modulo();
            List<Seccion> listaDeSecciones = new List<Seccion>();

            if (posicion == "actual")
            {
                moduloAMostrar = modeloMontes.Modulo.Find(idModulo);
                listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == idModulo).ToList();
            }
            else
                if (posicion == "anterior")
                {
                    moduloAMostrar = modeloMontes.Modulo.Where(x => x.IdModulo < idModulo).OrderByDescending(x => x.IdModulo).FirstOrDefault();
                    if (moduloAMostrar != null)
                        listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == moduloAMostrar.IdModulo).ToList();
                }
                else
                    if (posicion == "siguiente")
                    {
                        moduloAMostrar = modeloMontes.Modulo.Where(x => x.IdModulo > idModulo).OrderBy(x => x.IdModulo).FirstOrDefault();
                        if (moduloAMostrar != null)
                            listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == moduloAMostrar.IdModulo).ToList();
                    }

            if (listaDeSecciones.Count == 0) return RedirectToAction(SaberCurso(modeloMontes.Modulo.Where(x => x.IdModulo == idModulo).Select(y => y.IdCurso).FirstOrDefault()), "Curso");

            ViewBag.TituloModulo = moduloAMostrar.Nombre;
            ViewBag.IdModuloActual = moduloAMostrar.IdModulo;

            return View("Secciones", listaDeSecciones);
        }

        public ActionResult Contabilidad()
        {
            List<Modulo> listaDeModulos = new List<Modulo>();
            listaDeModulos = modeloMontes.Modulo.Where(x => x.IdCurso == (int)Cursos.Contabilidad).ToList();

            return View("Modulos", listaDeModulos);
        }

        public ActionResult Ingles()
        {
            return View();
        }

        string SaberCurso(int idCurso)
        {
            switch (idCurso)
            {
                case (int)Cursos.Ajedrez: return "Ajedrez";
                case (int)Cursos.Web: return "Web";
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
        Web = 2,
        Contabilidad = 3,
        Inglés = 4
    }
}
