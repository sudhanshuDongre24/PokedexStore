import Header from "./components/Header";
import Input from "./components/Input";
import InputSearch from "./components/InputSearch";
import "./App.css";
import SignIn from "./components/SignIn";

function App() {
  const logChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="bg-[#242423] min-h-screen  text-white">
        <Header />
        <SignIn />
        {/* 
        <div>
          <h1>helo1</h1>
          <h1>helo2</h1>
          <h1>helo3</h1>
          <h1>helo4</h1>
          <h1>helo5</h1>
          <h1>helo6</h1>
          <h1>helo7</h1>
          <h1>helo8</h1>
          <h1>helo9</h1>
          <h1>helo10</h1>
          <h1>helo11</h1>
          <h1>helo12</h1>
          <h1>helo13</h1>
          <h1>helo14</h1>
          <h1>helo15</h1>
          <h1>helo16</h1>
          <h1>helo17</h1>
          <h1>helo18</h1>
          <h1>helo19</h1>
          <h1>helo20</h1>
          <h1>helo21</h1>
          <h1>helo22</h1>
          <h1>helo23</h1>
          <h1>helo24</h1>
          <h1>helo25</h1>
          <h1>helo26</h1>
          <h1>helo27</h1>
          <h1>helo28</h1>
          <h1>helo29</h1>
          <h1>helo30</h1>
          <h1>helo31</h1>
          <h1>helo32</h1>
          <h1>helo33</h1>
          <h1>helo34</h1>
          <h1>helo35</h1>
          <h1>helo36</h1>
          <h1>helo37</h1>
          <h1>helo38</h1>
          <h1>helo39</h1>
          <h1>helo40</h1>
          <h1>helo41</h1>
          <h1>helo42</h1>
          <h1>helo43</h1>
          <h1>helo44</h1>
          <h1>helo45</h1>
          <h1>helo46</h1>
          <h1>helo47</h1>
          <h1>helo48</h1>
          <h1>helo49</h1>
          <h1>helo50</h1>
          <h1>helo51</h1>
          <h1>helo52</h1>
          <h1>helo53</h1>
          <h1>helo54</h1>
          <h1>helo55</h1>
          <h1>helo56</h1>
          <h1>helo57</h1>
          <h1>helo58</h1>
          <h1>helo59</h1>
          <h1>helo60</h1>
          <h1>helo61</h1>
          <h1>helo62</h1>
          <h1>helo63</h1>
          <h1>helo64</h1>
          <h1>helo65</h1>
          <h1>helo66</h1>
          <h1>helo67</h1>
          <h1>helo68</h1>
          <h1>helo69</h1>
          <h1>helo70</h1>
          <h1>helo71</h1>
          <h1>helo72</h1>
          <h1>helo73</h1>
          <h1>helo74</h1>
          <h1>helo75</h1>
          <h1>helo76</h1>
          <h1>helo77</h1>
          <h1>helo78</h1>
          <h1>helo79</h1>
          <h1>helo80</h1>
          <h1>helo81</h1>
          <h1>helo82</h1>
          <h1>helo83</h1>
          <h1>helo84</h1>
          <h1>helo85</h1>
          <h1>helo86</h1>
          <h1>helo87</h1>
          <h1>helo88</h1>
          <h1>helo89</h1>
          <h1>helo90</h1>
          <h1>helo91</h1>
          <h1>helo92</h1>
          <h1>helo93</h1>
          <h1>helo94</h1>
          <h1>helo95</h1>
          <h1>helo96</h1>
          <h1>helo97</h1>
          <h1>helo98</h1>
          <h1>helo99</h1>
          <h1>helo100</h1>
        </div> */}
      </div>
    </>
  );
}

export default App;
