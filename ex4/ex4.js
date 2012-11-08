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


	// Person class
	function Person(firstName,lastName) {
		this.first_name = firstName || "";
		this.last_name = lastName || "";
	}
	Person.prototype.toString = function() {
		return this.first_name + " " + this.last_name;
	};


	// Address class
	function Address(street,city,state,zip) {
		this.street = street || "";
		this.city = city || "";
		this.state = state || "";
		this.zip = zip || "";
	}
	Address.prototype.toString = function() {
		return this.street + ", " + this.city + ", " + this.state + " " + this.zip;
	};


	// AddressList class
	var AddressList = (function(){
		var addresses, IT_current, IT_next, __obj__;

		function AL() {
			addresses = [];
			this.entry_count = 0;
		}
		AL.prototype = new Iterator();
		IT_current = AL.prototype.current;
		IT_next = AL.prototype.next;

		AL.prototype.current = function() {
			var _idx = IT_current.call(this);
			if (_idx < addresses.length) {
				return addresses[_idx];
			}
		};
		AL.prototype.next = function() {
			var _idx = IT_current.call(this);
			if (_idx < (addresses.length - 1)) {
				_idx = IT_next.call(this);
				return addresses[_idx];
			}
		};

		AL.prototype.addAddress = function(label,addr) {
			addresses.push({
				label: label,
				addr: addr
			});
			this.entry_count++;
		};
		AL.prototype.toString = function() {
			var ret = "", addr;
			if (this.entry_count > 0) {
				this.resetIterator();
				addr = this.current();
				do {
					ret += (ret !== "" ? "\n" : "") + addr.label + ": " + addr.addr;
				}
				while ((addr = this.next()));
			}
			return ret;
		};

		__obj__ = new AL();
		__obj__.constructor = AddressList;
		return __obj__;
	});


	// AddressBookEntry class
	function AddressBookEntry(name) {
		this.name = name || new Person();
		this.addresses = new AddressList();
	}
	AddressBookEntry.prototype.addAddress = function(label,addr) {
		this.addresses.addAddress(label,addr);
	};
	AddressBookEntry.prototype.toString = function() {
		var ret = "", addr;
		ret += this.name;
		if (this.addresses.entry_count > 0) {
			ret += "\n" + this.addresses;
		}
		return ret;
	};


	// AddressBook class
	var AddressBook = (function(aBook){
		var entries, IT_current, IT_next, __obj__;

		function AB(aBook) {
			entries = [];
			this.entry_count = 0;

			// did we pass in an AddressBook instance to copy?
			if (aBook && aBook.constructor === AddressBook) {
				aBook.resetIterator();
				var entry = aBook.current();
				do {
					this.addEntry(entry);
				}
				while ((entry = aBook.next()));
			}
		}

		AB.prototype = new Iterator();
		IT_current = AB.prototype.current;
		IT_next = AB.prototype.next;

		AB.prototype.current = function() {
			var _idx = IT_current.call(this);
			if (_idx < entries.length) {
				return entries[_idx];
			}
		};
		AB.prototype.next = function() {
			var _idx = IT_current.call(this);
			if (_idx < (entries.length - 1)) {
				_idx = IT_next.call(this);
				return entries[_idx];
			}
		};

		AB.prototype.addEntry = function(entry) {
			entries.push(entry);
			this.entry_count++;
		};
		AB.prototype.toString = function() {
			var ret = "", entry;
			if (this.entry_count > 0) {
				this.resetIterator();
				entry = this.current();
				do {
					ret += (ret !== "" ? "\n---------------\n" : "") + entry;
				}
				while ((entry = this.next()));
			}
			return ret;
		};

		__obj__ = new AB(aBook);
		__obj__.constructor = AddressBook;
		return __obj__;
	});


	var mybook = new AddressBook();

	var kyle = new Person("Kyle","Simpson");
	var home = new Address("123 JavaScript St","Foobar","JS","01337");
	var entry = new AddressBookEntry(kyle);
	entry.addAddress("home",home);
	entry.addAddress("work",home);
	mybook.addEntry(entry);

	var marc = new Person("Marc","Grabanski");
	var home = new Address("456 Marc St","Baz","MG","88888");
	var work = new Address("789 Trainers Way","Bam","MG","99999");
	var entry = new AddressBookEntry(marc);
	entry.addAddress("home",home);
	entry.addAddress("work",work);
	mybook.addEntry(entry);

	var yourbook = new AddressBook(mybook);

	console.log(""+mybook);
	console.log("");
	console.log(""+yourbook);

	// ***************************

	function nl2br(str) {
		return str.replace(/[\n]/g,"<br>");
	}

	var $mybook = $("<ul></ul>");
	var $yourbook = $("<ul></ul>");
	var $li;

	$(document.body).append($("<h2>My Address Book</h2>"));
	mybook.resetIterator();
	entry = mybook.current();
	do {
		$li = $("<li></li>").html(nl2br(""+entry));
		$mybook.append($li);
	}
	while ((entry = mybook.next()));
	$(document.body).append($mybook);

	// *****

	$(document.body).append($("<h2>Your Address Book</h2>"));
	yourbook.resetIterator();
	entry = yourbook.current();
	do {
		$li = $("<li></li>").html(nl2br(""+entry));
		$yourbook.append($li);
	}
	while ((entry = yourbook.next()));
	$(document.body).append($yourbook);

})();