﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Montescc.Models.DAL;
using System.Text.RegularExpressions;

namespace Montescc.Controllers
{
    [HandleError]
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

        public ActionResult Noticia()
        {
            List<FormatoNoticia> listaDeModulos = new List<FormatoNoticia>();
            List<FormatoNoticia> listaTemporal = new List<FormatoNoticia>();

            listaDeModulos = (from noticia in modeloMontes.Modulo
                              where noticia.IdCurso == (int)Cursos.Noticia
                              select new FormatoNoticia
                              {
                                  UrlImagen = noticia.UrlImagen,
                                  NombreSitio = noticia.NombreSitio,
                                  Nombre = noticia.Nombre,
                                  posicion = noticia.Posicion
                              }).OrderByDescending(y => y.posicion).Take(15).ToList();

            List<FilasConFormatoDeNoticia> filasConFormato = new List<FilasConFormatoDeNoticia>();

            int numeroFila = 0;
            for (int i = 0; i < listaDeModulos.Count; i++)
            {
                if (i % 3 == 0 && listaDeModulos[i] != null && i != 0)
                {
                    numeroFila += 1;

                    filasConFormato.Add(new FilasConFormatoDeNoticia
                    {
                        Fila = numeroFila,
                        ListaNews = listaTemporal
                    });

                    listaTemporal = new List<FormatoNoticia>();
                }

                listaTemporal.Add(listaDeModulos[i]);

                if (i == listaDeModulos.Count - 1)
                {
                    numeroFila += 1;

                    filasConFormato.Add(new FilasConFormatoDeNoticia
                    {
                        Fila = numeroFila,
                        ListaNews = listaTemporal
                    });
                }
            }

            //                     .Modulo.Where(x => x.IdCurso == (int)Cursos.Noticia).ToList();
            //listaDeModulos = listaDeModulos.OrderByDescending(z => z.Posicion).Take(15).ToList();
            //ViewBag.IdDeCurso = (int)Cursos.Noticia;
            ViewBag.FilasDeNoticias = filasConFormato;
            List<Modulo> listaDeModulosXD = new List<Modulo>();
            ViewBag.IdDeCurso = (int)Cursos.Noticia;

            return View("Modulos", listaDeModulosXD);

            //List<Modulo> listaDeModulos = new List<Modulo>();
            //listaDeModulos = modeloMontes.Modulo.Where(x => x.IdCurso == (int)Cursos.Noticia).ToList();
            //listaDeModulos = listaDeModulos.OrderByDescending(z => z.Posicion).Take(15).ToList();
            //ViewBag.IdDeCurso = (int)Cursos.Noticia;

            //return View("Modulos", listaDeModulos);
        }

        public JsonResult SiguientesNoticias(int contadorDePaginasNoticias)
        {
            List<FormatoNoticia> listaDeModulos = new List<FormatoNoticia>();
            List<FormatoNoticia> listaTemporal = new List<FormatoNoticia>();

            listaDeModulos = (from noticia in modeloMontes.Modulo
                              where noticia.IdCurso == (int)Cursos.Noticia
                              select new FormatoNoticia
                              {
                                  UrlImagen = noticia.UrlImagen,
                                  NombreSitio = noticia.NombreSitio,
                                  Nombre = noticia.Nombre,
                                  posicion = noticia.Posicion
                              }).OrderByDescending(y => y.posicion).ToList();

            listaDeModulos = listaDeModulos.Skip(15 * contadorDePaginasNoticias).ToList();
            listaDeModulos = listaDeModulos.Take(15).ToList();

            List<FilasConFormatoDeNoticia> filasConFormato = new List<FilasConFormatoDeNoticia>();

            int numeroFila = 0;
            for (int i = 0; i < listaDeModulos.Count; i++)
            {
                if (i % 3 == 0 && listaDeModulos[i] != null)
                {
                    numeroFila += 1;

                    filasConFormato.Add(new FilasConFormatoDeNoticia
                    {
                        Fila = numeroFila,
                        ListaNews = listaTemporal
                    });

                    listaTemporal = new List<FormatoNoticia>();
                }

                listaTemporal.Add(listaDeModulos[i]);

                if (i == listaDeModulos.Count - 1)
                {
                    numeroFila += 1;

                    filasConFormato.Add(new FilasConFormatoDeNoticia
                    {
                        Fila = numeroFila,
                        ListaNews = listaTemporal
                    });
                }
            }

            return Json(new { SiguientesNoticias = filasConFormato }, JsonRequestBehavior.AllowGet);

            //List<SiguienteNoticias> listaSiguientesNoticias = new List<SiguienteNoticias>();

            //listaSiguientesNoticias = (from noticia in modeloMontes.Modulo
            //                           where noticia.IdCurso == (int)Cursos.Noticia
            //                           select new SiguienteNoticias
            //                           {
            //                               UrlImagen = noticia.UrlImagen,
            //                               NombreSitio = noticia.NombreSitio,
            //                               Nombre = noticia.Nombre,
            //                               posicion = noticia.Posicion
            //                           }).OrderByDescending(y => y.posicion).ToList();

            //listaSiguientesNoticias = listaSiguientesNoticias.Skip(15 * contadorDePaginasNoticias).ToList();
            //listaSiguientesNoticias = listaSiguientesNoticias.Take(15).ToList();

            //return Json(new { SiguientesNoticias = listaSiguientesNoticias }, JsonRequestBehavior.AllowGet);
        }

        public class FilasConFormatoDeNoticia
        {
            public int Fila { get; set; }
            public List<FormatoNoticia> ListaNews { get; set; }
        }

        public class FormatoNoticia
        {
            public string UrlImagen { get; set; }
            public string NombreSitio { get; set; }
            public string Nombre { get; set; }
            public int? posicion { get; set; }
        }

        public class SiguienteNoticias
        {
            public string UrlImagen { get; set; }
            public string NombreSitio { get; set; }
            public string Nombre { get; set; }
            public int? posicion { get; set; }
        }

        public ActionResult AspNetMvc()
        {
            List<Modulo> listaDeModulos = new List<Modulo>();
            listaDeModulos = modeloMontes.Modulo.Where(x => x.IdCurso == (int)Cursos.AspNetMvc).ToList();
            ViewBag.IdDeCurso = (int)Cursos.AspNetMvc;

            return View("Modulos", listaDeModulos);
        }

        public ActionResult Web()
        {
            return View();
        }

        public ActionResult Ingles(int idPagina)
        {
            return View("LeccionIngles", idPagina);
        }

        public ActionResult SeccionesCurso(int idModulo, string posicion, int idCurso)
        {
            Modulo moduloAMostrar = new Modulo();
            Modulo moduloActualTemporal = new Modulo();
            List<Seccion> listaDeSecciones = new List<Seccion>();

            moduloActualTemporal = modeloMontes.Modulo.Find(idModulo);

            if (posicion == "actual")
            {
                moduloAMostrar = modeloMontes.Modulo.Find(idModulo);
                listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == idModulo && x.Modulo.IdCurso == idCurso).ToList();
            }
            else
                if (posicion == "anterior")
                {
                    moduloAMostrar = modeloMontes.Modulo.OrderBy(y => y.Posicion).ToList().Where(x => x.Posicion < moduloActualTemporal.Posicion && x.IdCurso == idCurso).LastOrDefault();
                    if (moduloAMostrar != null)
                        listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == moduloAMostrar.IdModulo).ToList();
                }
                else
                    if (posicion == "siguiente")
                    {
                        moduloAMostrar = modeloMontes.Modulo.OrderBy(y => y.Posicion).ToList().Where(x => x.Posicion > moduloActualTemporal.Posicion && x.IdCurso == idCurso).FirstOrDefault();
                        if (moduloAMostrar != null)
                            listaDeSecciones = modeloMontes.Seccion.Where(x => x.IdModulo == moduloAMostrar.IdModulo && x.Modulo.IdCurso == idCurso).ToList();
                    }

            if (listaDeSecciones.Count == 0) return RedirectToAction(SaberCurso(modeloMontes.Modulo.Where(x => x.IdModulo == idModulo && x.IdCurso == idCurso).Select(y => y.IdCurso).FirstOrDefault()), "Curso");

            ViewBag.TituloModulo = moduloAMostrar.Nombre;
            ViewBag.IdModuloActual = moduloAMostrar.IdModulo;
            ViewBag.IdDeCurso = idCurso;
            ViewBag.ListaModulos = modeloMontes.Modulo.Where(x => x.IdCurso == idCurso).OrderBy(x => x.Posicion).ToList();

            ViewBag.DescripcionContenido = Regex.Replace(listaDeSecciones.Select(y => y.Contenido).FirstOrDefault(), "<.*?>", String.Empty);

            return View("Secciones", listaDeSecciones);
        }

        string SaberCurso(int idCurso)
        {
            switch (idCurso)
            {
                case (int)Cursos.Ajedrez: return "Ajedrez";
                case (int)Cursos.AspNetMvc: return "AspNetMvc";
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
        AspNetMvc = 2,
        Contabilidad = 3,
        Inglés = 4,
        Noticia = 5
    }
}
