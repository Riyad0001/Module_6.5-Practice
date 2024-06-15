#include <bits/stdc++.h>
using namespace std;
int main()
{
    int u;
    cin >> u;
    while (u--)
    {
        string s, t;
        cin >> s >> t;
        swap(s[0], t[0]);
        cout << s << " " << t << endl;
    }

    return 0;
}