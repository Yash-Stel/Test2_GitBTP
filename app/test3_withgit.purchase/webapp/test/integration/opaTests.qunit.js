sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'test3withgit/purchase/test/integration/FirstJourney',
		'test3withgit/purchase/test/integration/pages/PurchasesList',
		'test3withgit/purchase/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('test3withgit/purchase') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);