
interface EventData {
    callback: Function
    once: boolean
}


export class EventEmitter {
    /**
     * 事件存储 Map
     */
    private eventsMap: Map<string, EventData[]> = new Map();
    /**
     * 事件监听
     * @param eventName 事件名字
     * @param callback 返回方法
     * @param target 
     */
    public on(eventName: string, callback: Function) {
        this.addEventListener(eventName, callback, false);
    }
    public once(eventName: string, callback: Function) {
        this.addEventListener(eventName, callback, true);
    }

    private addEventListener(eventName: string, callback: Function, once: boolean): void {
        let pools = this.eventsMap.get(eventName) || []
        if (!pools.find(pool => pool.callback === callback && pool.once === once)) {
            pools.push({ callback: callback, once: once });
        }
        this.eventsMap.set(eventName, pools);
    }

    /**
     * 事件发送
     * @param eventName 
     * @param data 
     */
    public emit(eventName: string, data?: any) {
        if (!this.eventsMap.has(eventName)) {
            // console.warn(`${eventName} 事件不存在`);
            return;
        }
        let pools = this.eventsMap.get(eventName) || [];
        let nPools = pools.filter((pool) => {
            pool.callback(data);
            if (pool.once) {
                return false
            }

            return true
        })

        if (nPools.length != pools.length) {
            if (nPools.length === 0) {
                this.eventsMap.delete(eventName)
            } else {
                this.eventsMap.set(eventName, nPools)
            }
        }

    }
    /**
     * 取消事件监听
     * @param eventName 
     */
    public off(eventName: string, func: Function) {
        if (!this.eventsMap.has(eventName)) {
            // console.warn(`${eventName} 事件不存在`);
            return;
        }
        let pools = this.eventsMap.get(eventName) || [];
        let nPools = pools.filter((pool) => {
            return pool.callback !== func
        })

        if (nPools.length != pools.length) {
            if (nPools.length === 0) {
                this.eventsMap.delete(eventName)
            } else {
                this.eventsMap.set(eventName, nPools)
            }
        }
    }
}
