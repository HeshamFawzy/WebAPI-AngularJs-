//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Task_WebAPI_AngularJs_.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Phone_Calls
    {
        public int Phone_Call_ID { get; set; }
        public string Details { get; set; }
        public string Call_Address { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string Project { get; set; }
        public string Employee { get; set; }
        public Nullable<bool> Was_Done { get; set; }
        public string Call_Type { get; set; }
        public Nullable<bool> Was_Income { get; set; }
        public string Introduced_By { get; set; }
        public Nullable<System.DateTime> Entry_Date { get; set; }
        public string Last_Update { get; set; }
        public Nullable<System.DateTime> Last_Modified_In { get; set; }
        public Nullable<int> Customer_ID { get; set; }
    
        public virtual Customer Customer { get; set; }
    }
}
