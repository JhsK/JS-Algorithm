function kangaroo(x1, v1, x2, v2) {
  if (!(x2 > x1 && v1 > v2)) return "NO";
  if ((x2 - x1) % (v1 - v2) !== 0) return "NO";

  return "YES";
}

// 증명

// x1 + v1*t = x2 + v2*t

// t에 대한 해결: -> 즉 횟수

// t = (x2-x1)/(v1-v2)

// t가 양의 정수가 되려면 :
// x2 > x1 and v1 > v2 and (x2-x1)%(v1-v2) == 0
