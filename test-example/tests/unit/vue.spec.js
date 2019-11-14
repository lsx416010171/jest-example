import {mount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'
import MyButton from '@/components/MyButton'
import Axios from '@/components/Axios'
import axios from 'axios'

describe('测试Vue组件实例',()=>{
    // 创建一个包含被挂载和渲染的 Vue 组件的 Wrapper
    const wapper = mount(HelloWorld)
    it('测试props',()=>{
        // 在创建的时候修改了props中msg的值
        wapper.setProps({ msg: 'HelloWorld' })
        expect(wapper.vm.msg).toBe('HelloWorld')
    })
    it('测试data',()=>{
        // 使用setData来修改原组件data的值
        wapper.setData({title : 'Im hello world in test'})
        expect(wapper.vm.title).toBe('Im hello world in test')
    })
    it('测试DOM',()=>{
        // 使用find来寻找dom中的元素
        // text 是dom元素中文本的内容
        expect(wapper.find('.hello h1').text()).toBe('HelloWorld')
        // is 判断元素tag标签
        expect(wapper.find('.hello h1').is('div'))
    })
})

describe('测试Vue组件实例',()=>{
    const wapper = mount(MyButton)
    it('测试自定义事件',()=>{
        // 创建mock函数
        const mockFn = jest.fn();
        // 设置 Wrapper vm 的方法并强制更新。
        wrapper.setMethods({
            increment: mockFn
        });
        // 模拟点击事件
        wapper.find('button').trigger('click');
        // 查看是否有回调
        expect(mockFn).toBeCalled();
        // 回调次数
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})

// 单元测试的核心之一就是测试方法的行为是否符合预期，在测试时要避免一切的依赖，将所有的依赖都mock掉。
// 第一步：不需要实际调用axios.get方法，需要将它mock掉
// 第二步：测试是否调用了axios方法（但是并不实际触发）并且返回了一个Promise对象
const mockData = {
    data: {
      code : 1,
      msg : 'sucess'
    }
  };
jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve(mockData))
}));
describe('测试方法',()=>{
    beforeEach(() => {
        axios.get.mockClear();
        wrapper = shallow(Axios);
    });
    
    // 点击按钮后调用了 getAnswer 方法
    it('sendRequest Fn should be called', () => {
        const mockFn = jest.fn();
        wrapper.setMethods({sendRequest: mockFn});
        wrapper.find('button').trigger('click');
        expect(mockFn).toBeCalled();
    });
    
    // 点击按钮后调用了axios.get方法
    it('axios.get Fn should be called', () => {
        const URL = 'www.pokepe.vip/test';
        wrapper.find('button').trigger('click');
        expect(axios.get).toBeCalledWith(URL)
    });

    // 测试axios返回数据是否正确
    // 因为axios是异步的，所以我们也要异步监听数据，有几种方法用来处理异步问题
    // 1、done  2、async/await 3、Pomise

    // done
    // fetchData方法执行成功后，调用回调函数callback，遇到done才会结束
    it('Calls get promise result',async ()=> {
        function callback(data) {
          expect(data).toBe('peanut butter');
          done();
        }
        fetchData(callback);
    });

    // async/await 方法
    it('Calls get promise result',async ()=> {
        const result = await wrapper.vm.sendRequest()
        expect(result).toEqual(mockData)
    });

    // axios.get方法返回值（Promise）
    it('Calls get promise result', ()=> {
        return expect(wrapper.vm.sendRequest()).resolves.toEqual(mockData);
    });
})