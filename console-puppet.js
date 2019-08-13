//<--- Start --->
// Go to Placements, Exclusions and Click the Blue Edit Button (Pencil)
// Click on "Exclude from Account", Click to "App Categories"
// Click on "Google Play", Click on "Apple App Store"
//
//<--- Insert snippet 1 --->
    var clickTree1 = document.querySelectorAll("div[role='tree'] .row material-icon");
    for (var y= 0; y < clickTree1.length; y++) {
        if (clickTree1[y].innerText === 'expand_more') {
            clickTree1[y].click();
        }
    }
// Click enter and see the Magic #1 happening
//<--- Insert snippet 2 --->
var clickTree2 = document.querySelectorAll("div[role='tree'] .ripple");
for (var i = 0; i < clickTree2.length; i++) {
    clickTree2[i].click();
}
// Click enter and see the Magic #2 happening
//<--- End --->
