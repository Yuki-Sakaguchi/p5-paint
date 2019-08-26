/**
 * 描画開始前に１度だけ動く処理
 */
function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
}

/**
 * 1秒間に60回（frameRate関数で指定可能）実行される処理
 */
function draw () {
  fill(0, 127, 255);
  noStroke();
  ellipse(width/2, height/2, 100, 100);
}

/**
 * クリック（タップ）時に動く処理
 */
function mousePressed () {
  
}

/**
 * キー入力された時に動く処理
 * keyCodeで入力されたキーを取得できる
 */
function keyPressed() {

}

/**
 * リサイズ時に動く処理
 */
function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}
