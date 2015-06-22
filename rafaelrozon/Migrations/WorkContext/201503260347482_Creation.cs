namespace rafaelrozon.Migrations.WorkContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Creation : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Author = c.String(),
                        Status = c.Int(nullable: false),
                        Description = c.String(),
                        Link = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Status = c.Int(nullable: false),
                        Description = c.String(),
                        Book_ID = c.Int(),
                        Resource_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Books", t => t.Book_ID)
                .ForeignKey("dbo.Resources", t => t.Resource_ID)
                .Index(t => t.Book_ID)
                .Index(t => t.Resource_ID);
            
            CreateTable(
                "dbo.Works",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Description = c.String(),
                        Status = c.Int(nullable: false),
                        Client = c.String(),
                        Date = c.DateTime(nullable: false),
                        Link = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Images",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Source = c.String(),
                        Description = c.String(),
                        Date = c.DateTime(nullable: false),
                        Status = c.Int(nullable: false),
                        Work_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Works", t => t.Work_ID)
                .Index(t => t.Work_ID);
            
            CreateTable(
                "dbo.Resources",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Status = c.Int(nullable: false),
                        Description = c.String(),
                        Link = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.WorkCategories",
                c => new
                    {
                        Work_ID = c.Int(nullable: false),
                        Categories_ID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Work_ID, t.Categories_ID })
                .ForeignKey("dbo.Works", t => t.Work_ID, cascadeDelete: true)
                .ForeignKey("dbo.Categories", t => t.Categories_ID, cascadeDelete: true)
                .Index(t => t.Work_ID)
                .Index(t => t.Categories_ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Categories", "Resource_ID", "dbo.Resources");
            DropForeignKey("dbo.Categories", "Book_ID", "dbo.Books");
            DropForeignKey("dbo.Images", "Work_ID", "dbo.Works");
            DropForeignKey("dbo.WorkCategories", "Categories_ID", "dbo.Categories");
            DropForeignKey("dbo.WorkCategories", "Work_ID", "dbo.Works");
            DropIndex("dbo.WorkCategories", new[] { "Categories_ID" });
            DropIndex("dbo.WorkCategories", new[] { "Work_ID" });
            DropIndex("dbo.Images", new[] { "Work_ID" });
            DropIndex("dbo.Categories", new[] { "Resource_ID" });
            DropIndex("dbo.Categories", new[] { "Book_ID" });
            DropTable("dbo.WorkCategories");
            DropTable("dbo.Resources");
            DropTable("dbo.Images");
            DropTable("dbo.Works");
            DropTable("dbo.Categories");
            DropTable("dbo.Books");
        }
    }
}
