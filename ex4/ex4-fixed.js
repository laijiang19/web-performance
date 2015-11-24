// non-ES5 shim for Object.create()
if (!Object.create) {
	Object.create = function(o) {
		function F(){}
		F.prototype = o;
		return new F();
	};
}

// shim for Object.keys() in non-ES5
// From: https://gist.github.com/atk/1034464
if(!Object.keys){Object.keys=function(o,k,r){r=[];for(k in o)r.hasOwnProperty.call(o,k)&&r.push(k);return r}}

// a simple helper (wrapper around Object.create() basically)
function makeObject(fromObj,init) {
	fromObj = fromObj || null;
	var o = Object.create(fromObj);
	if (fromObj && !("__proto__" in o)) o.__proto__ = fromObj;
	if (init) init.call(o);
	return o;
}

(function(){

	// Generic (abstract) Iterator class
	var Iterator = (function(){
		var _idx, __obj__;

		function IT() {
			_idx = 0;
		}

		IT.prototype.resetIterator = function() {
			_idx = 0;
		};
		IT.prototype.current  = function() {
			return _idx;
		};
		IT.prototype.next = function() {
			return ++_idx;
		};

		__obj__ = new IT();
		__obj__.constructor = Iterator;
		return __obj__;
	});


	// General class
	var General = makeObject();
	General.makeIteratable = function() {
		this.__iter__ = new Iterator();
	};
	General.toString = function() {
		var keys = Object.keys(this), ret = "";
		for (var i=0; i<keys.length; i++) {
			if (!keys[i].match(/^__.*__$/)) {
				ret += (ret !== "" ?
					this.__toString_delimiter__ :
					""
				) + this[keys[i]];
			}
		}
		return ret;
	};


	// Person class
	var Person = makeObject();
	Person.init = function(firstName,lastName) {
		this.first_name = firstName || "";
		this.last_name = lastName || "";
		this.__toString_delimiter__ = " ";
	};
	Person.toString = General.toString; // just borrow it


	// Address class
	var Address = makeObject();
	Address.init = function(street,city,state,zip) {
		this.street = street || "";
		this.city = city || "";
		this.state = state || "";
		this.zip = zip || "";
		this.__toString_delimiter__ = ", ";
	};
	Address.toString = General.toString; // just borrow it


	// AddressList class
	var AddressList = makeObject();
	AddressList.init = function() {
		General.makeIteratable.call(this);
		this.addresses = [];
		this.entry_count = 0;
	};
	AddressList.resetIterator = function() {
		return this.__iter__.resetIterator();
	};
	AddressList.current = function() {
		var _idx = this.__iter__.current();
		if (_idx < this.addresses.length) {
			return this.addresses[_idx];
		}
	};
	AddressList.next = function() {
		var _idx = this.__iter__.current();
		if (_idx < (this.addresses.length - 1)) {
			_idx = this.__iter__.next();
			return this.addresses[_idx];
		}
	};
	AddressList.addAddress = function(label,addr) {
		this.addresses.push({
			label: label,
			addr: addr
		});
		this.entry_count++;
	};
	AddressList.getAddresses = function() {
		return this.addresses.slice();
	};
	AddressList.addAddresses = function(addrList) {
		this.addresses = this.addresses.concat(addrList);
	};
	AddressList.toString = function() {
		var ret = "", i;
		if (this.entry_count > 0) {
			for (i=0; i<this.addresses.length; i++) {
				ret += (ret !== "" ? "\n" : "") + this.addresses[i].label + ": " + this.addresses[i].addr;
			}
		}
		return ret;
	};


	// AddressBookEntry class
	var AddressBookEntry = makeObject();
	AddressBookEntry.init = function(name) {
		this.name = name || makeObject(Person,function(){
			this.init();
		});
		this.addresses = makeObject(AddressList,function(){
			this.init();
		});
	};
	AddressBookEntry.addAddress = function(label,addr) {
		this.addresses.addAddress(label,addr);
	};
	AddressBookEntry.addAddresses = function(addrs) {
		this.addresses.addAddresses(addrs);
	};
	AddressBookEntry.toString = function() {
		var ret = "", addr;
		ret += this.name;
		if (this.addresses.entry_count > 0) {
			ret += "\n" + this.addresses;
		}
		return ret;
	};


	// AddressBook class
	var AddressBook = makeObject();
	AddressBook.init = function(aBook) {
		General.makeIteratable.call(this);
		this.entries = [];
		this.entry_count = 0;

		// did we pass in an AddressBook instance to copy?
		if (aBook && Object.isPrototypeOf.call(AddressBook,aBook)) {
			this.entries = this.entries.concat(aBook.getEntries());
			this.entry_count = this.entries.length;
		}
	};
	AddressBook.resetIterator = function() {
		return this.__iter__.resetIterator();
	};
	AddressBook.current = function() {
		var _idx = this.__iter__.current();
		if (_idx < this.entries.length) {
			return this.entries[_idx];
		}
	};
	AddressBook.next = function() {
		var _idx = this.__iter__.current();
		if (_idx < (this.entries.length - 1)) {
			_idx = this.__iter__.next();
			return this.entries[_idx];
		}
	};
	AddressBook.addEntry = function(entry) {
		this.entries.push(entry);
		this.entry_count++;
	};
	AddressBook.getEntries = function() {
		return this.entries.slice();
	};
	AddressBook.addEntries = function(entries) {
		this.entries = this.entries.concat(entries);
	};
	AddressBook.toString = function() {
		var ret = "", i;
		if (this.entry_count > 0) {
			for (i=0; i<this.entries.length; i++) {
				ret += (ret !== "" ? "\n---------------\n" : "") + this.entries[i];
			}
		}
		return ret;
	};

	// ***************************

	var mybook = makeObject(AddressBook,function(){
		this.init();
	});
	var kyle = makeObject(Person,function(){
		this.init("Kyle","Simpson");
	});
	var home = makeObject(Address,function(){
		this.init("123 JavaScript St","Foobar","JS","01337");
	});
	var entry = makeObject(AddressBookEntry,function(){
		this.init(kyle);
	});
	entry.addAddress("home",home);
	entry.addAddress("work",home);
	mybook.addEntry(entry);

	// *****

	var scott = makeObject(Person,function(){
		this.init("Scott","Davis");
	});
	home = makeObject(Address,function(){
		this.init("456 Scott St","Baz","SD","88888");
	});
	work = makeObject(Address,function(){
		this.init("789 Trainers Way","Bam","SD","99999");
	});
	entry = makeObject(AddressBookEntry,function(){
		this.init(scott);
	});
	entry.addAddresses([
		{ home: home },
		{ work: work }
	]);
	mybook.addEntry(entry);

	var yourbook = makeObject(AddressBook,function(){
		this.init(mybook);
	});

	// output the address books to the console
	console.log(""+mybook);
	console.log("");
	console.log(""+yourbook);


	// ***************************
	// output the address books to the DOM/page too

	function nl2br(str) {
		return str.replace(/[\n]/g,"<br>");
	}

	var $mybook = $("<ul></ul>");
	var $yourbook = $("<ul></ul>");
	var $li;
	var entries, i;

	$(document.body).append($("<h2>My Address Book</h2>"));
	entries = mybook.getEntries();
	for (i=0; i<entries.length; i++) {
		$li = $("<li></li>").html(nl2br(""+entries[i]));
		$mybook.append($li);
	}
	$(document.body).append($mybook);

	// *****

	$(document.body).append($("<h2>Your Address Book</h2>"));
	entries = yourbook.getEntries();
	for (i=0; i<entries.length; i++) {
		$li = $("<li></li>").html(nl2br(""+entry));
		$yourbook.append($li);
	}
	$(document.body).append($yourbook);

})();