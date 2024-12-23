document.getElementById('meniGumb').addEventListener('click', function () {
    var meni = document.getElementById('meniBurger');
    var slikca = document.getElementById('meniGumb');

    if (window.getComputedStyle(meni).display === 'none') {
        meni.style.display = 'block';
        slikca.style.transform = ('rotate(-90deg)');
        setTimeout(function () {
            meni.classList.add('show');
        }, 10);
    } else {
        meni.classList.remove('show');
        slikca.style.transform = ('rotate(0deg)');
        setTimeout(function () {
            meni.style.display = 'none';
        }, 300);
    }
});


const canvas = document.getElementById('canvasID');
const ctx = canvas.getContext('2d');
draw();
function draw() {
    ctx.scale(3.5,1.8);
    ctx.translate(canvas.width/100, canvas.height/60);
    ctx.save();
    ctx.fillStyle = "#08c";
    ctx.miterLimit = 4;
    ctx.font = "15px ''";
    ctx.font = "   15px ''";
    ctx.scale(0.06249458708300855, 0.06249458708300855);
    ctx.scale(1.0667590551181103, 1.0667590551181103);
    ctx.save();
    ctx.fillStyle = "#08c";
    ctx.strokeStyle = "black";
    ctx.font = "   15px ''";
    ctx.beginPath();
    ctx.moveTo(599, 0);
    ctx.bezierCurveTo(599, 0, 601, 0, 601, 0);
    ctx.bezierCurveTo(601, 0, 642.58, 98, 642.58, 98);
    ctx.bezierCurveTo(670.75, 165.14, 699.93, 231.85, 730.31, 298);
    ctx.bezierCurveTo(730.31, 298, 792.75, 427, 792.75, 427);
    ctx.bezierCurveTo(792.75, 427, 805.25, 453, 805.25, 453);
    ctx.bezierCurveTo(805.25, 453, 812.75, 467, 812.75, 467);
    ctx.bezierCurveTo(812.75, 467, 868.74, 577, 868.74, 577);
    ctx.bezierCurveTo(868.74, 577, 887.31, 613, 887.31, 613);
    ctx.bezierCurveTo(887.31, 613, 932.26, 699, 932.26, 699);
    ctx.bezierCurveTo(932.26, 699, 1001.31, 829, 1001.31, 829);
    ctx.bezierCurveTo(1001.31, 829, 1040.26, 902, 1040.26, 902);
    ctx.bezierCurveTo(1044.32, 909.86, 1054.95, 927.8, 1057, 935);
    ctx.bezierCurveTo(1057, 935, 1039, 925.31, 1039, 925.31);
    ctx.bezierCurveTo(1039, 925.31, 1011, 911.31, 1011, 911.31);
    ctx.bezierCurveTo(1011, 911.31, 948, 886.95, 948, 886.95);
    ctx.bezierCurveTo(948, 886.95, 915, 876.58, 915, 876.58);
    ctx.bezierCurveTo(915, 876.58, 898, 873, 898, 873);
    ctx.bezierCurveTo(904.35, 874.81, 908.28, 877.78, 914, 880.74);
    ctx.bezierCurveTo(914, 880.74, 946, 899, 946, 899);
    ctx.bezierCurveTo(984.93, 922.36, 1013.61, 943.09, 1049, 971.4);
    ctx.bezierCurveTo(1049, 971.4, 1082, 997.8, 1082, 997.8);
    ctx.bezierCurveTo(1086.48, 1001.38, 1096.28, 1008.81, 1099.37, 1013.01);
    ctx.bezierCurveTo(1099.37, 1013.01, 1115.86, 1043, 1115.86, 1043);
    ctx.bezierCurveTo(1115.86, 1043, 1154.31, 1114, 1154.31, 1114);
    ctx.bezierCurveTo(1154.31, 1114, 1185.78, 1172, 1185.78, 1172);
    ctx.bezierCurveTo(1189.45, 1178.91, 1198.12, 1193.42, 1200, 1200);
    ctx.bezierCurveTo(1193.63, 1198.14, 1181.32, 1190.45, 1175, 1186.85);
    ctx.bezierCurveTo(1175, 1186.85, 1130, 1161.42, 1130, 1161.42);
    ctx.bezierCurveTo(1130, 1161.42, 1093, 1141.69, 1093, 1141.69);
    ctx.bezierCurveTo(1093, 1141.69, 1009, 1098.25, 1009, 1098.25);
    ctx.bezierCurveTo(954.98, 1071.42, 891.36, 1044.31, 834, 1025.74);
    ctx.bezierCurveTo(834, 1025.74, 762, 1005.37, 762, 1005.37);
    ctx.bezierCurveTo(762, 1005.37, 730, 998, 730, 998);
    ctx.bezierCurveTo(735.34, 968.7, 738.35, 944.93, 738, 915);
    ctx.bezierCurveTo(738, 915, 736.96, 905, 736.96, 905);
    ctx.bezierCurveTo(736.96, 905, 736.96, 896, 736.96, 896);
    ctx.bezierCurveTo(732.52, 850.71, 721.43, 804.94, 697.05, 766);
    ctx.bezierCurveTo(676.3, 732.85, 644.95, 702.87, 604, 700.09);
    ctx.bezierCurveTo(599, 699.75, 596.75, 700.28, 592, 700.85);
    ctx.bezierCurveTo(555.21, 705.24, 526.04, 732.6, 507.19, 763);
    ctx.bezierCurveTo(482.67, 802.57, 471.07, 847.89, 467.91, 894);
    ctx.bezierCurveTo(467.91, 894, 467, 906, 467, 906);
    ctx.bezierCurveTo(467, 906, 467, 935, 467, 935);
    ctx.bezierCurveTo(467.18, 950.23, 472.06, 982.12, 476, 997);
    ctx.bezierCurveTo(476, 997, 436, 1005.88, 436, 1005.88);
    ctx.bezierCurveTo(436, 1005.88, 375, 1023.02, 375, 1023.02);
    ctx.bezierCurveTo(314.07, 1041.96, 242.14, 1072.67, 185, 1101.25);
    ctx.bezierCurveTo(185, 1101.25, 94, 1148.69, 94, 1148.69);
    ctx.bezierCurveTo(94, 1148.69, 70, 1161.42, 70, 1161.42);
    ctx.bezierCurveTo(70, 1161.42, 25, 1186.85, 25, 1186.85);
    ctx.bezierCurveTo(18.68, 1190.45, 6.37, 1198.14, 0, 1200);
    ctx.bezierCurveTo(2, 1193, 11.69, 1177.3, 15.7, 1170);
    ctx.bezierCurveTo(15.7, 1170, 51.14, 1106, 51.14, 1106);
    ctx.bezierCurveTo(51.14, 1106, 158.69, 911, 158.69, 911);
    ctx.bezierCurveTo(222.66, 792.99, 287.19, 675.28, 348.74, 556);
    ctx.bezierCurveTo(348.74, 556, 393.25, 468, 393.25, 468);
    ctx.bezierCurveTo(393.25, 468, 405.74, 444, 405.74, 444);
    ctx.bezierCurveTo(405.74, 444, 425.74, 403, 425.74, 403);
    ctx.bezierCurveTo(425.74, 403, 437, 380, 437, 380);
    ctx.bezierCurveTo(442.62, 382.53, 447.18, 387, 452, 390.79);
    ctx.bezierCurveTo(452, 390.79, 474, 406.67, 474, 406.67);
    ctx.bezierCurveTo(500.33, 424.25, 533.03, 443.79, 562, 456.42);
    ctx.bezierCurveTo(562, 456.42, 587, 467.85, 587, 467.85);
    ctx.bezierCurveTo(591.37, 469.73, 595.2, 472.01, 600, 472);
    ctx.bezierCurveTo(591.2, 467.69, 570.71, 451.22, 562, 444.42);
    ctx.bezierCurveTo(535.66, 423.9, 510.6, 401.6, 487, 378);
    ctx.bezierCurveTo(487, 378, 463.01, 354, 463.01, 354);
    ctx.bezierCurveTo(460.63, 351.56, 455.43, 346.49, 455.22, 343);
    ctx.bezierCurveTo(455.09, 340.98, 457.52, 336.06, 458.42, 334);
    ctx.bezierCurveTo(458.42, 334, 467.74, 314, 467.74, 314);
    ctx.bezierCurveTo(467.74, 314, 497.72, 247, 497.72, 247);
    ctx.bezierCurveTo(497.72, 247, 559.01, 99, 559.01, 99);
    ctx.bezierCurveTo(559.01, 99, 586.2, 32, 586.2, 32);
    ctx.bezierCurveTo(586.2, 32, 599, 0, 599, 0);
    ctx.closePath();
    ctx.moveTo(601, 473);
    ctx.bezierCurveTo(601, 473, 600, 473, 600, 473);
    ctx.bezierCurveTo(600, 473, 601, 474, 601, 474);
    ctx.bezierCurveTo(601, 474, 601, 473, 601, 473);
    ctx.closePath();
    ctx.moveTo(603, 474);
    ctx.bezierCurveTo(603, 474, 602, 474, 602, 474);
    ctx.bezierCurveTo(602, 474, 603, 475, 603, 475);
    ctx.bezierCurveTo(603, 475, 603, 474, 603, 474);
    ctx.closePath();
    ctx.fillStyle = "#08c";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
}
