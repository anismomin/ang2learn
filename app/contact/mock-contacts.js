System.register(['./contact'], function(exports_1) {
    var contact_1;
    var CONTACTS;
    return {
        setters:[
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            exports_1("CONTACTS", CONTACTS = [
                new contact_1.Contact('anis', 'momin', 'anismomin@hotmail.com'),
                new contact_1.Contact('sahil', 'momin', 'sahilmomin@hotmail.com'),
                new contact_1.Contact('hafeez', 'momin', 'hafeezmomin@hotmail.com'),
                new contact_1.Contact('nisar', 'momin', 'nisarmomin@hotmail.com'),
                new contact_1.Contact('ateeq', 'momin', 'ateeqmomin@hotmail.com'),
                new contact_1.Contact('inayat', 'momin', 'inayatmomin@hotmail.com')
            ]);
        }
    }
});

//# sourceMappingURL=mock-contacts.js.map
