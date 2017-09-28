<script>
var list1 = document.getElementsByTagName("textarea")[0].value;
var list1 = list1.replace(/,\n/g,",");
var list1 = list1.replace(/, \n/g,",")
var list1 = list1.replace(/ /g,"")
var list2 = list1.split(",");
var list3 = list2.sort();
var list4 = list3.toString();
//alert(list1);
//alert(list2);
//alert(list3);
var list5 = list4.replace(/,/g,", ");
document.getElementsByTagName("textarea")[1].innerHTML = list5;
</script>