lattice.modules.Associator = new Class({
	
	Extends: lattice.modules.LatticeAssociator,
	
	/* Section: Getters & Setters */	

	getSaveFieldURL: function( itemObjectId ){
	  var url = lattice.util.getBaseURL() +"ajax/data/associator/savefield/" + itemObjectId;
//		log( '\t\getSaveFieldURL', url );
		return url;
	},
	
	getAssociateURL: function( id, itemid, latticeid ){
		var url = lattice.util.getBaseURL() + 'ajax/html/associator/associate/' + id + "/" + itemid + "/" + latticeid;
//		log( '\t\getAssociateURL', id );
		return url;
	},
	
	getDissociateURL: function( id, itemid, latticeid ){
		var url = lattice.util.getBaseURL() + 'ajax/html/associator/dissociate/' + id + "/" + itemid + "/" + latticeid;
//		log( '\t\getDissociateURL', url );
		return url;
	},
	
	getSubmitSortOrderURL: function( itemid, latticeid ){
		var url = lattice.util.getBaseURL() + "ajax/data/cms/saveSortOrder/" + itemid + "/" + latticeid;
//		console.log( '\t\getSubmitSortOrderURL', url );
		return url;
	},
	
	getFilterPoolByWordsURL: function( pid, latticeid, word ){
		var url = lattice.util.getBaseURL() + "ajax/html/associator/filterPoolByWord/" + pid + "/" + latticeid + "/" + word;
		return url;
	},
	
	toString: function(){
		return "[ object, lattice.LatticeObject, lattice.modules.Module, lattice.modules.LatticeAssociator, lattice.modules.Associator ]";
	},
	
	initialize: function( anElement, aMarshal, options ){
		this.parent( anElement, aMarshal, options );
	}
	
});

lattice.modules.RadioAssociator = new Class({
	
	Extends: lattice.modules.LatticeRadioAssociator,
	
	/* Section: Getters & Setters */	
	getAssociateURL: function( id, itemid, latticeid ){
		var url = lattice.util.getBaseURL() + 'ajax/html/associator/associate/' + id + "/" + itemid + "/" + latticeid;
//		log( 'getAssociateURL', id, itemid, latticeid  );
//		log( url );
		return url;
	},
	
	getDissociateURL: function( id, itemid, latticeid ){
		var url = lattice.util.getBaseURL() + 'ajax/html/associator/dissociate/' + id + "/" + itemid + "/" + latticeid;
//		log( '\t\getDissociateURL', url );
		return url;
	},
	
	toString: function(){
		return "[ object, lattice.LatticeObject, lattice.modules.Module, lattice.modules.LatticeAssociator, lattice.modules.RadioAssociator ]";
	},
	
	initialize: function( anElement, aMarshal, options ){
		this.parent( anElement, aMarshal, options );
	}
});

lattice.modules.CheckboxAssociator = new Class({
	
	Extends: lattice.modules.LatticeCheckboxAssociator,
	
	/* Section: Getters & Setters */	

	getAssociateURL: function( id, itemid, latticeid ){
		var url = lattice.util.getBaseURL() + 'ajax/html/associator/associate/' + id + "/" + itemid + "/" + latticeid;
//	log( 'getAssociateURL', id, itemid, latticeid  );
//	log( url );
		return url;
	},
	
	getDissociateURL: function( id, itemid, latticeid ){
		var url = lattice.util.getBaseURL() + 'ajax/html/associator/dissociate/' + id + "/" + itemid + "/" + latticeid;
//	log( '\t\getDissociateURL', url );
		return url;
	},
	
	toString: function(){
		return "[ object, lattice.LatticeObject, lattice.modules.Module, lattice.modules.LatticeAssociator, lattice.modules.CheckboxAssociator ]";
	},
	
	initialize: function( anElement, aMarshal, options ){
		this.parent( anElement, aMarshal, options );
	}
});
