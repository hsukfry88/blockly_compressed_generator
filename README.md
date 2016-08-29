# Blockly Compressed Generator #

## Blockly Compressed 파일 만드는 법 ##
1. [Blockly](https://github.com/google/blockly) 소스와 [ClosureLibrary](https://github.com/google/closure-library) 소스를 다운받는다.
2. Blockly소스와 ClosureLibrary소스를 아래구조로 Setting한다.

    -![closure-directory.png](https://bitbucket.org/repo/zBrB8E/images/176280286-closure-directory.png) 

3. 구조 최상위 경로에서 터미널에 `$cd blockly && python build.py` 작성하면 blockly_compressed.js외 msg/ 등 다양한 파일이 생성된다.

## Blockly Customizing ##
*