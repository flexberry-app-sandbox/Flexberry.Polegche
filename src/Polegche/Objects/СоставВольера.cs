﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Polegche
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Состав вольера.
    /// </summary>
    // *** Start programmer edit section *** (СоставВольера CustomAttributes)

    // *** End programmer edit section *** (СоставВольера CustomAttributes)
    [AutoAltered()]
    [Caption("Состав вольера")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставВольераE", new string[] {
            "Животные as \'Животные\'",
            "Животные.Кличка as \'Кличка\'"}, Hidden=new string[] {
            "Животные.Кличка"})]
    [MasterViewDefineAttribute("СоставВольераE", "Животные", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Кличка")]
    public class СоставВольера : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Polegche.Животные fЖивотные;
        
        private IIS.Polegche.Вольер fВольер;
        
        // *** Start programmer edit section *** (СоставВольера CustomMembers)

        // *** End programmer edit section *** (СоставВольера CustomMembers)

        
        /// <summary>
        /// Состав вольера.
        /// </summary>
        // *** Start programmer edit section *** (СоставВольера.Животные CustomAttributes)

        // *** End programmer edit section *** (СоставВольера.Животные CustomAttributes)
        [PropertyStorage(new string[] {
                "Животные"})]
        [NotNull()]
        public virtual IIS.Polegche.Животные Животные
        {
            get
            {
                // *** Start programmer edit section *** (СоставВольера.Животные Get start)

                // *** End programmer edit section *** (СоставВольера.Животные Get start)
                IIS.Polegche.Животные result = this.fЖивотные;
                // *** Start programmer edit section *** (СоставВольера.Животные Get end)

                // *** End programmer edit section *** (СоставВольера.Животные Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставВольера.Животные Set start)

                // *** End programmer edit section *** (СоставВольера.Животные Set start)
                this.fЖивотные = value;
                // *** Start programmer edit section *** (СоставВольера.Животные Set end)

                // *** End programmer edit section *** (СоставВольера.Животные Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Polegche.Вольер.
        /// </summary>
        // *** Start programmer edit section *** (СоставВольера.Вольер CustomAttributes)

        // *** End programmer edit section *** (СоставВольера.Вольер CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Вольер"})]
        public virtual IIS.Polegche.Вольер Вольер
        {
            get
            {
                // *** Start programmer edit section *** (СоставВольера.Вольер Get start)

                // *** End programmer edit section *** (СоставВольера.Вольер Get start)
                IIS.Polegche.Вольер result = this.fВольер;
                // *** Start programmer edit section *** (СоставВольера.Вольер Get end)

                // *** End programmer edit section *** (СоставВольера.Вольер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставВольера.Вольер Set start)

                // *** End programmer edit section *** (СоставВольера.Вольер Set start)
                this.fВольер = value;
                // *** Start programmer edit section *** (СоставВольера.Вольер Set end)

                // *** End programmer edit section *** (СоставВольера.Вольер Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставВольераE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставВольераE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставВольераE", typeof(IIS.Polegche.СоставВольера));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of СоставВольера.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСоставВольера CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСоставВольера CustomAttributes)
    public class DetailArrayOfСоставВольера : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Polegche.DetailArrayOfСоставВольера members)

        // *** End programmer edit section *** (IIS.Polegche.DetailArrayOfСоставВольера members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type СоставВольера by index.
        /// </summary>
        /// <summary>
        /// Adds object with type СоставВольера.
        /// </summary>
        public DetailArrayOfСоставВольера(IIS.Polegche.Вольер fВольер) : 
                base(typeof(СоставВольера), ((ICSSoft.STORMNET.DataObject)(fВольер)))
        {
        }
        
        public IIS.Polegche.СоставВольера this[int index]
        {
            get
            {
                return ((IIS.Polegche.СоставВольера)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Polegche.СоставВольера dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
