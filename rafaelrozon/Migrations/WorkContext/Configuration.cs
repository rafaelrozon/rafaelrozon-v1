namespace rafaelrozon.Migrations.WorkContext
{
    using rafaelrozon.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<rafaelrozon.Models.DataContext.WorkContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            MigrationsDirectory = @"Migrations\WorkContext";
        }

        protected override void Seed(rafaelrozon.Models.DataContext.WorkContext context)
        {
            /* new categories */
            Categories bootstrap = new Categories() { Name = "Bootstrap", Status = 1 };
            Categories jsf = new Categories() { Name = "JSF", Status = 1 };
            Categories javaee = new Categories() { Name = "Java EE", Status = 1 };
            Categories cpp = new Categories() { Name = "C++", Status = 1 };
            Categories csharp = new Categories() { Name = "C#", Status = 1 };
            Categories primefaces = new Categories() { Name = "PrimeFaces", Status = 1 };
            Categories php = new Categories() { Name = "PHP", Status = 1 };
            Categories ajax = new Categories() { Name = "Ajax", Status = 1 };
            Categories html5 = new Categories() { Name = "HTML5", Status = 1 };
            Categories css = new Categories() { Name = "CSS", Status = 1 };
            Categories asp = new Categories() { Name = "ASP.NET", Status = 1 };
            Categories mvc = new Categories() { Name = "MVC", Status = 1 };
            Categories webApi = new Categories() { Name = "Web API", Status = 1 };
            Categories responsive = new Categories() { Name = "Responsive", Status = 1 };
            Categories mySql = new Categories() { Name = "MySQL", Status = 1 };
            Categories cron = new Categories() { Name = "Cron", Status = 1 };
            Categories webForms = new Categories() { Name = "ASP.NET Web Forms", Status = 1 };
            Categories jpa = new Categories() { Name = "JPA", Status = 1 };
            Categories angular = new Categories() { Name = "AngularJS", Status = 1 };
            Categories ejb = new Categories() { Name = "EJB3", Status = 1 };

            // make list of categories
            var categoriesList = new List<Categories>() {  bootstrap, javaee, jsf, cpp, csharp, 
                                                    primefaces, php, ajax, html5, css, asp,
                                                    mvc, webApi,responsive, mySql, cron, webForms, jpa, angular,
                                                    ejb };
            // save categories in the list
            categoriesList.ForEach(i => context.Categories.Add(i));
            context.SaveChanges();

            /* create and save works */
            context.Work.AddOrUpdate(

                 /* PROJECT MANAGEMENT APP */
                 new Work
                 {
                     Date = new DateTime(2015, 03, 01),
                     Title = "Project Management App",
                     Status = 1,
                     Description = "This is a project I developed with other 9 classmates at BCIT for the course “Managing Information Systems Development”. It is a web application that provides tools for project managers to control the budget allocated to software development projects. It is a multi-tier application that follows the MVC pattern and implemented with Java EE, JSF, PrimeFaces, and Bootstrap. The Rational Unified Process was used for project management and software architecture. I was mainly responsible for the user interface, but I also made contributions to the back-end.",
                     Images = new System.Collections.Generic.List<Models.Image>() 
                    { 
                        new Image() 
                        {
                            Date = new DateTime(2015, 03, 01),
                            Description = "Project Management App screenshot",
                            Status = 1,
                            Title = "Project Management App",
                            Source = "~/Content/images/atDefaultScreenShot.png"                                 
                        }
                    },
                     Categories = new List<Categories>() { bootstrap, javaee, jsf, primefaces, jpa, css, mySql, ejb, ajax },
                     Link = "https://www.youtube.com/watch?v=rEWy4JTVlvM"
                 }, // end of proj management app

                   /* SOFIA FISIOTERAPIA */
               new Work
               {
                   Date = new DateTime(2015, 03, 01),
                   Title = "sofiafisioterapia.com",
                   Status = 1,
                   Description = "This is a website I am developing for my girlfriend. She is a physiotherapist in Brazil with specialization in women health, osteopathy, and sexuality. The goal of the website is to showcase her work for prospective patients, as well as her academic publications and informative texts. I tried to keep it simple and focus the attention to the content, which is the most important part. The next steps are the implementation of SEO and metrics.",

                   Images = new System.Collections.Generic.List<Models.Image>() 
                    { 
                        new Image() 
                        {
                            Date = new DateTime(2015, 03, 01),
                            Description = "sofiafisioterapia.com screenshot",
                            Status = 1,
                            Title = "sofiafisioterapia.com",
                            Source = "~/Content/images/sofiaWebScreenShot.png"                                 
                        }
                    },
                   Categories = new List<Categories>() { bootstrap, webForms, html5, responsive },
                   Link = "http://www.sofiafisioterapia.com"
               }, // end of sofiafisioterapia.com

                    /* BLONYX */
                new Work
                {
                    Date = new DateTime(2015, 03, 01),
                    Title = "Blonyx Web App",
                    Status = 1,
                    Description = "Project developed in group for the company Blonyx Bioscience as part of the course 'Computer Projects Practicum' at BCIT. My classmates and I developed a prototype of a web application that enables Crossfit coaches to create workout routines, schedule them, and have their content posted automatically to Wordpress blogs. The main challenges were to automate the posting of the workout routines on blogs and to keep a consistent format. It was a great challenge with tight deadlines, new technologies, lots of documentation, and definitely a great learning experience.",
                    Images = new System.Collections.Generic.List<Models.Image>() 
                    { 
                        new Image() 
                        {
                            Date = new DateTime(2015, 03, 01),
                            Description = "Blonyx Web App screenshot",
                            Status = 1,
                            Title = "Blonyx Web App",
                            Source = "~/Content/images/blonyxScreenShot.png"                                 
                        }
                    },
                    Categories = new List<Categories>() { bootstrap, css, mySql, ajax, php, html5, responsive, cron }
                }, // end of Blonyx

                /* RAFAELROZON.COM */
                new Work
                {
                    Date = new DateTime(2015, 03, 01),
                    Title = "rafaelrozon.com",
                    Status = 1,
                    Description = "It is a living project, dreamed a long time ago, and now implemented using ASP.NET MVC 5, HTML5, and CSS from scratch. No web frameworks, not in this project. I started using Bootstrap, but I thought I would learn more if I tried to do everything by myself. It is taking more time, but I am learning much more.",

                    Images = new System.Collections.Generic.List<Models.Image>() 
                    { 
                        new Image() 
                        {
                            Date = new DateTime(2015, 03, 01),
                            Description = "rafaelrozon.com screenshot",
                            Status = 1,
                            Title = "rafaelrozon.com",
                            Source = "~/Content/images/placeholder.png"                                 
                        }
                    },
                    Categories = new List<Categories>() { bootstrap, asp, html5, css, csharp, responsive },
                    Link = "https://github.com/rafaelrozon/rafaelrozon.com"
                }, // end of rafaelrozon.com

                new Work { 
                    Date = new DateTime(2015, 05, 22),
                    Title = "International Downhill Federation - Web App",
                    Status = 1,
                    Description = "It was a 5 week project developed at BCIT for the International Downhill Federation. My group and I had to make a prototype of an ASP.NET MVC application for managing race events. The application had to handle users with different roles and I was responsible for implementing the features for the administrator role, which included: setup race events and their categories and management of users. The client wanted us to use his desktop application and database as a model for the web application, which was a great challenge and learning experience.",
                    Images = new System.Collections.Generic.List<Models.Image>() { 
                        new Image(){
                            Date = new DateTime(2015, 05, 22),
                            Description = "IDF Web App screenshot",
                            Status = 1,
                            Title = "IDF Web App",
                            Source = "~/Content/images/IDF_screenshot_sm.png"                                 
                        }
                    },
                    Categories = new List<Categories>() { bootstrap, asp, html5, css, csharp, responsive, mySql, ajax, mvc },
                    Link = "https://www.youtube.com/watch?v=Lc_TrnImj54"
                }



               ); // done saving of works
        }
    }
}
